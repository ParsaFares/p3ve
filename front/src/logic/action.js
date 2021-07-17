// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../setup/redux'

export const SET_DATA = 'SET_DATA'
export const dispatchSetData = (payload) =>
  dispatch(createAction(SET_DATA)(payload))
