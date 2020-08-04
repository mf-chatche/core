import React, { useMemo } from 'react'
import './home.style.scss'
import { useGlobalLoggedUser } from 'app-providers'

import Messages from '@chatche/messages'
import SendMessageForm from '@chatche/send-message'

import '@chatche/send-message/dist/index.css'
import '@chatche/messages/dist/index.css'

Messages.register()
SendMessageForm.register()

/**
 * @Route /home
 * @Component Home
 * @Private
 */
export const Home = () => {
  const [loggedUser] = useGlobalLoggedUser()
  const loggedUserString = useMemo(() => JSON.stringify(loggedUser), [
    loggedUser
  ])

  return (
    <div className="home">
      <div className="home__messages">
        <chatche-messages logged-user={loggedUserString} />
      </div>
      <div className="home__send-message">
        <chatche-send-message logged-user={loggedUserString} />
      </div>
    </div>
  )
}
