import UseStore from './useStore.js'

const useAuthentication = () => {
  const { state, updateState } = UseStore()

  const setUser = (user) => updateState({ user })

  const setToken = (token) => updateState({ token })

  const logout = () => {
    setToken('')
    setUser({
      _id: '',
      name: '',
      email: ''
    })
  }

  return {
    user: state.user,
    token: state.token,
    isLogged: !!state.token,
    logout,
    setUser,
    setToken
  }
}

export default useAuthentication
