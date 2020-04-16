import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

import Routes from '../Routes'


export default function Main() {
  return <>
    <CssBaseline>
      <Router>
        <Routes />
      </Router>
    </CssBaseline>
  </>
}