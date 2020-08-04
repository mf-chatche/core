import React from 'react'
import './login.style.scss'

import login from '@chatche/login'
import '@chatche/login/dist/index.css'

import { useEventListener, useRoute } from 'app-hooks'
import { useGlobalLoggedUser } from 'app-providers'

login.register()

/**
 * @Route /login
 * @Component Login
 */

export const Login = () => {
  const [ , setLoggedUser ] = useGlobalLoggedUser()
  const { goToHome } = useRoute()

  useEventListener(login.events.onSubmit, handleSubmit)

  function handleSubmit(user) {
    localStorage.setItem('loggedUser', JSON.stringify(user))
    setLoggedUser(user)

    goToHome()
  }

  return (
    <div className="login">
      <div className="login__box">
        <chatche-login />
      </div>
    </div>
  )
}
