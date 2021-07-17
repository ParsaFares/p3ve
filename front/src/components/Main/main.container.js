// modules
import { connect } from 'react-redux'
// components
import Main from './Main'
// selectors
import { calculateAgeSelector } from './main.selector'

const mapStateToProps = (state) => ({
  calculatedAge: calculateAgeSelector(state),
})

export default connect(mapStateToProps)(Main)
