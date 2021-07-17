// modules
import { connect } from 'react-redux'
// components
import Inform from './Inform.presentational'
// views
import { getOnOkay } from './inform'

const mapStateToProps = (state) => ({
  ...state.view.inform,

  onOkay: () => getOnOkay()(),
})

export default connect(mapStateToProps)(Inform)
