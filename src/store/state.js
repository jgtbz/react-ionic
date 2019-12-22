import React, { createContext, useContext, useReducer, useEffect } from 'react'

const localState = JSON.parse(localStorage.getItem('state'))

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => {
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

export const useStateValue = () => useContext(StateContext)
