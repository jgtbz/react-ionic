import createPersistence from '@vitorluizc/persistence'

const store = createPersistence('store', {
  storage: window.localStorage,
  placeholder: {
    token: ''
  }
})

const getProp = (prop) => store.get()[prop]
const setProp = (prop) => (value) => store.set({ [prop]: value })

const getToken = () => getProp('token')
const setToken = setProp('token')

export {
  getToken,
  setToken
}
