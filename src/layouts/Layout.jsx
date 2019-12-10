import React, { useEffect } from 'react'
import Public from './Public'
import Secure from './Secure'
import { useAuthentication } from '../store'

const Component = () => {
  const { isLogged } = useAuthentication()

  const Container = isLogged
    ? Secure
    : Public

  useEffect(() => {
    console.log({ isLoggedFromContainer: isLogged })
  }, [isLogged])

  return <Container />
}

export default Component
