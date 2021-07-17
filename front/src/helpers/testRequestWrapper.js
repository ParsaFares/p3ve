const MIN_DELAY = 100
const MAX_DELAY = 200

const ERROR_PROBABILITY = 0.1

export default (request, considerError) => (...args) =>
  new Promise((resolve, reject) => {
    const delay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY
    const throwError = Math.random() < ERROR_PROBABILITY

    setTimeout(
      () =>
        considerError && throwError
          ? reject('Request failed')
          : request(...args)
              .then(resolve)
              .catch(reject),
      delay,
    )
  })

export const tapError = res =>
  new Promise((resolve, reject) => {
    const delay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY
    const throwError = Math.random() < ERROR_PROBABILITY

    setTimeout(
      () => (throwError ? reject('Request failed') : resolve(res)),
      delay,
    )
  })
