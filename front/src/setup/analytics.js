// modules
import * as R from 'ramda'
// setup
import { getState } from './redux'
// weblite API
const { W } = window

window.sendAnalytics = (type, data) => {
  // const isEditMode = R.path(['view', 'app', 'editMode'], getState())
  // const articleId = R.prop('articleId', W.wapp.getInput())

  W.analytics(`ARTICLE-${type}`, {
    ...data,
    // editMode: isEditMode,
    // articleId,
  })
}
