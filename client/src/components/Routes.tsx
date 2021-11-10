import React from 'react'
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom'

import { Home } from './Routes/Home'


export function Routes() {
  return <ReactRouterRoutes>
    <Route
      path="/"
      element={<Home />} />
  </ReactRouterRoutes>
}