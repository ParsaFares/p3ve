// modules
import { createStore, compose, combineReducers } from 'redux'
// reducers
import mainReducer from '../logic/reducer'

const reducers = combineReducers({
  main: mainReducer,
})

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'amooze-editor',
      })
    : compose
/* eslint-enable */

const store = createStore(reducers, composeEnhancers())

export default store
export const { dispatch, getState } = store
