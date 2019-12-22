import http from '../http'

const login = (payload) => http.post('/users/login', payload)

const forgotPasswordSendPin = (payload) => http.patch('/users/forgot-password/send-pin', payload)

const forgotPasswordValidatePin = (payload) => http.patch('/users/forgot-password/validate-pin', payload)

const forgotPassword = (payload) => http.patch('/users/forgot-password', payload)

const profile = () => http.get('/users/profile')

const createUsers = (payload) => http.post('/users', payload)

const updateUsers = (id, payload) => http.patch(`/users/${id}`, payload)

const updatePassword = (id, payload) => http.patch(`/users/password/${id}`, payload)

export {
  login,
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword,
  profile,
  createUsers,
  updateUsers,
  updatePassword
}
