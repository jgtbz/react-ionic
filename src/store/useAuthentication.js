import { useEffect } from 'react'
import useStore from './useStore.js'

const useAuthentication = () => {
  const { state, updateState } = useStore()

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

  useEffect(() => {
    console.log({ isLoggedFromUseAuthentication: !!state.token })
  }, [state.token])

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
