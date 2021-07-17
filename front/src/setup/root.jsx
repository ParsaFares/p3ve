// Modules
import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
// Component
import Main from '../components/Main/main.container'
// Styles
import theme from '../helpers/appTheme'
import './root.scss'
import './fonts/fonts.scss'
// setup
import store from './redux'

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>
)
