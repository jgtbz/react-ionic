import React from 'react'
import Public from './Public'
import Secure from './Secure'
import { useAuthentication } from '../store'

const Component = () => {
  const { isLogged } = useAuthentication()

  console.log({ isLogged })
  
  const Layout = isLogged
    ? Secure
    : Public

  return <Layout />
}

export default Component
