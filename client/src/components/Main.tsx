import { BrowserRouter as Router } from 'react-router-dom'

import { Routes } from './Routes'


export default function Main() {
  return <>
    <Router>
      <Routes />
    </Router>
  </>
}