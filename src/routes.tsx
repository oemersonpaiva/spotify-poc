import React from 'react'
import { Router } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { isAuthenticated } from 'utils/auth/session'
import { Login } from 'components/presentational'
import { Home } from 'containers'

export const history = createBrowserHistory()

type PrivateRouteProps = {
  Component: React.ElementType
  path: string
}

const PrivateRoute = ({ Component, path }: PrivateRouteProps) => (
  <Route
    path={path}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
)

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route
        path={'/login'}
        render={() => (isAuthenticated() ? <Redirect to="/" /> : <Login />)}
      />
      <PrivateRoute path="/" Component={Home} />
    </Switch>
  </Router>
)

export default Routes
