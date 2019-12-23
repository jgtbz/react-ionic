import React, { createContext, useContext, useReducer, useEffect } from 'react'

const localState = JSON.parse(localStorage.getItem('state'))

const StateContext = createContext()

const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, localState || initialState)

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

const useStateValue = () => useContext(StateContext)

export {
  StateProvider,
  useStateValue
}
