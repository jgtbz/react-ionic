import React from 'react'
import Public from './Public'
import Secure from './Secure'
import { useStore } from '../store'

const Component = () => {
  const [{ isLogged }] = useStore()

  const Layout = isLogged
    ? Secure
    : Public

  return <Layout />
}

export default Component
