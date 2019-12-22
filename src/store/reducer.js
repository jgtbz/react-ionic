import initialState from './initialState'

const setUser = (state, { user }) => ({ ...state, user })
const setLogged = (state) => ({ ...state, isLogged: true })
const setLogout = (state) => ({
  ...state,
  ...initialState
})

const reducers = {
  setUser,
  setLogged,
  setLogout
}

export default (state, { type, ...action }) => {
  const reducer = reducers[type]
  return reducer(state, action)
}
