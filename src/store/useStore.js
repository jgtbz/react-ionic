import { useState } from 'react'
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

  return {
    state,
    updateState
  }
}

export { store }
export default useStore
