// modules
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// polyfill setup
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// mock API
import './helpers/mockWebliteAPI'
// components
import Root from './setup/root.jsx'
import './setup/analytics'
// weblite API
const { W } = window

const renderWapp = () =>
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    window.document.getElementById('root')
  )

// Hot Module Replacement API
if (module.hot) module.hot.accept('./setup/root.jsx', renderWapp)
renderWapp()

W.setHooks()
