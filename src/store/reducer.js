import initialState from './initialState'
import { setToken as storeToken } from './persistence'

const setUser = (state, { user }) => ({ ...state, user })
const setToken = (state, { token }) => {
  storeToken(token)
  return {
    ...state,
    isLogged: true
  }
}
const setLogout = (state) => ({
  ...state,
  ...initialState
})

const reducers = {
  setUser,
  setToken,
  setLogout
}

export default (state, { type, ...action }) => {
  const reducer = reducers[type]
  return reducer(state, action)
}
