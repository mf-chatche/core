import React from 'react'
import { history } from 'app-helpers'
import { Router, Switch, Redirect } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from 'app-router'
import * as pages from 'app-pages'

export const AppRoutes = () => {
  const mapRoutes = () => {
    return document.ROUTES.map(({ isPrivate, component, ...route }, key) => {
      const pageComponent = pages[component]
      const RouteType = isPrivate ? PrivateRoute : PublicRoute

      return <RouteType key={key} component={pageComponent} {...route} />
    })
  }

  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />

        {mapRoutes()}
      </Switch>
    </Router>
  )
}
