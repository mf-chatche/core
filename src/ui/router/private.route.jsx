import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { scrollHelper } from 'app-helpers'
import { useRoute } from 'app-hooks'
import { useGlobalLoggedUser } from 'app-providers'

const Page = ({ component: Component, role, permissions, ...props }) => {
  const [ loggedUser ] = useGlobalLoggedUser()
  const { goToLogin } = useRoute()

  useEffect(() => {
    scrollHelper.goToTop()
  }, [Component])

  if (!loggedUser) {
    goToLogin({ from: props.location })

    return null
  }

  return (
    <>
      <Component {...props} />
    </>
  )
}

export const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => <Page component={component} {...props} />}
    />
  )
}
