import http from '../http'

const profile = () => http.get('/users/profile')

const createUser = (payload) => http.post('/users', payload)

const updateUser = (id, payload) => http.patch(`/users/${id}`, payload)

export {
  profile,
  createUser,
  updateUser
}
