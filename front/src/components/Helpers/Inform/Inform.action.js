// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../../setup/redux'

export const SET_INFORM_IS_OPEN = 'SET_INFORM_IS_OPEN'
export const setInformIsOpen = createAction(SET_INFORM_IS_OPEN)
export const dispatchSetInformIsOpen = (isOpen) =>
  dispatch(setInformIsOpen(isOpen))

export const SET_INFORM_INFO = 'SET_INFORM_INFO'
export const setInformInfo = createAction(
  SET_INFORM_INFO,
  ({ type, size, message, buttonCaption }) => ({
    type,
    size: size || 'small',
    message,
    buttonCaption,
  })
)
export const dispatchSetInformInfo = (info) => dispatch(setInformInfo(info))
