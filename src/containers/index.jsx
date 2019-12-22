import React from 'react'
import Public from './Public'
import Secure from './Secure'
import { useStateValue } from '../store'

const Component = () => {
  const [{ isLogged }] = useStateValue()

  const Container = isLogged
    ? Secure
    : Public

  return <Container />
}

export default Component
