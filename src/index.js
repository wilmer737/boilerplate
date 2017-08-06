import React from 'react'
import {render} from 'react-dom'

import App from './components/app'
import appStyles from './index.css'

render(
  <App />,
  document.querySelector('#app')
)