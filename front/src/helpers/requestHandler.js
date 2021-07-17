// modules
import * as R from 'ramda'
import request from 'axios'
import retry from 'bluebird-retry'
// helpers
import { tapError } from './testRequestWrapper'
// setup
import { hostURL } from '../setup/config'

let pendingRequests = {}

export const removeRequestsByKey = (key) => {
  pendingRequests = R.mapObjIndexed((item) => {
    const { key: requestKey, shouldStop, ...other } = item

    if (requestKey === key)
      return { shouldStop: true, key: requestKey, ...other }
    return item
  }, pendingRequests)
}

const makeRequest = () => {
  let retryCount = 0

  return (
    requestType,
    {
      path,
      data,
      query,
      onRetry: { func = Function.prototype, nth: nthRetry } = {},
    },
    timestamp,
    res
  ) => {
    if (pendingRequests[timestamp] && pendingRequests[timestamp].shouldStop)
      throw new retry.StopError('post request stopped!')

    // return tapError(res).catch((e) => {
    //   if (nthRetry === undefined || retryCount === nthRetry) func(e)
    //   retryCount += 1

    //   return Promise.reject(e)
    // })

    return requestType === 'POST'
      ? request.post(hostURL + path, data).catch((e) => {
          if (nthRetry === undefined || retryCount === nthRetry) func(e)
          retryCount += 1

          return Promise.reject(e)
        })
      : request.get(hostURL + path, { params: query }).catch((e) => {
          if (nthRetry === undefined || retryCount === nthRetry) func(e)
          retryCount += 1

          return Promise.reject(e)
        })
  }
}

const makeRequestWithRetry = (requestType) => ({
  maxTries,
  timeout,
  interval,
  key,
  res,
  ...options
}) =>
  new Promise((resolve, reject) => {
    const requestTimestamp = `${Date.now()}`
    if (key) pendingRequests[requestTimestamp] = { shouldStop: false, key }

    const request = retry(makeRequest(), {
      max_tries: maxTries,
      timeout,
      interval,
      args: [requestType, options, requestTimestamp, res],
    })
      .then((response) => {
        if (pendingRequests[requestTimestamp])
          delete pendingRequests[requestTimestamp]

        resolve(response.data || response)
      })
      .caught((e) => {
        if (pendingRequests[requestTimestamp])
          delete pendingRequests[requestTimestamp]

        if (e.name !== 'StopError') reject(e)
      })

    return request
  })

export const postRequest = makeRequestWithRetry('POST')

export const getRequest = makeRequestWithRetry('GET')
