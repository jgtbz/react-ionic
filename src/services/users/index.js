import http from '../http'

const profile = () => http.get('/users/profile')

const createUsers = (payload) => http.post('/users', payload)

const updateUsers = (id, payload) => http.patch(`/users/${id}`, payload)

export {
  profile,
  createUsers,
  updateUsers
}
