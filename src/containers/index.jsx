import React from 'react'
import Public from './Public'
import Secure from './Secure'
import { useStore } from '../store'

const Component = () => {
  const [{ isLogged }] = useStore()

  const Container = isLogged
    ? Secure
    : Public

  return <Container />
}

export default Component
