import { useState, useEffect } from 'react'
import createPersistence from '@vitorluizc/persistence'

const store = createPersistence('store', {
  storage: window.localStorage,
  placeholder: {
    token: '',
    user: {
      _id: '',
      name: '',
      email: '',
    }
  }
})

const useStore = () => {
  const [state, setState] = useState(store.get())

  const updateState = (updatedState) => {
    const state = {
      ...store.get(),
      ...updatedState
    }
    setState(state)
    store.set(state)
  }

  useEffect(() => {
    console.log({ isLoggedFromUseStore: !!state.token })
  }, [state.token])

  return {
    state,
    updateState
  }
}

export { store }
export default useStore
