// modules
import * as R from 'ramda'

const initialState = {
  minAge: 7,
  indAge: 23,

  phoneCost: 4,
  risedPhoneCost: 7,
  phoneRepairYearlyCost: 0.5,

  pressureOnParents: 5,
  parentsAwareness: 0.4,
  socialMediaHarmness: 4,
}

const reducer = {
  SET_DATA: (state, data) => ({ ...state, ...data }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
