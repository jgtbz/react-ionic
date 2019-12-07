import http from '../http'

const login = (payload) => http.post('/auth/login', payload)

const forgotPasswordSendPin = (payload) => http.patch('/users/forgot-password/send-pin', payload)

const forgotPasswordValidatePin = (payload) => http.patch('/users/forgot-password/validate-pin', payload)

const forgotPassword = (payload) => http.patch('/users/forgot-password', payload)

export {
  login,
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword
}
