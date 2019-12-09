import React from 'react'
import Context from './context'

const Connect = Component => () => (
  <Context.Consumer>
    {({ dispatch, store }) => <Component {...store} dispatch={dispatch} />}
  </Context.Consumer>
)

export default Connect
