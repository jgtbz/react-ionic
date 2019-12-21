import React from 'react'
import Public from './Public'
import Secure from './Secure'
import { useAuthentication } from '../store'

const Component = () => {
  const { isLogged } = useAuthentication()

  const Container = isLogged
    ? Secure
    : Public

  return <Container />
}

export default Component
