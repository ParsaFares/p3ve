// modules
import { connect } from 'react-redux'
// components
import Toolbar from './Toolbar'
// actions
import { dispatchSetData } from '../../logic/action'

const mapStateToProps = state => ({
  ...state.main,
})

const mapDispatchToProps = () => ({
  onChange: key => value => dispatchSetData({ [key]: value }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
