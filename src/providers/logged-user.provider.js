import createGlobalState from 'react-create-global-state'

const loggedUser = localStorage.getItem('loggedUser') || null

export const [useGlobalLoggedUser, LoggedUserProvider] = createGlobalState(JSON.parse(loggedUser))