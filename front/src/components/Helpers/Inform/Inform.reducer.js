const initialState = {
  isOpen: false,
  type: 'error',
  message: 'دسترسی غیر مجاز',
  size: 'small',
  buttonCaption: 'بستن',
}

const reducer = {
  SET_INFORM_IS_OPEN: (state, isOpen) => ({ ...state, isOpen }),

  SET_INFORM_INFO: (state, info) => ({ ...state, ...info }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
