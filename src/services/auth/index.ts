import http from '../http'

interface loginInterface {
  email: string,
  password: string
}

const login = (payload: loginInterface): Promise<Object> => http.post('/auth/login', payload)

// interface forgotPasswordSendPin {
//   email: string,
//   password: string
// }

const forgotPasswordSendPin = (payload: loginInterface): Promise<Object> => http.patch('/users/forgot-password/send-pin', payload)

// interface forgotPasswordValidatePin {
//   email: string,
//   password: string
// }

const forgotPasswordValidatePin = (payload: loginInterface): Promise<Object> => http.patch('/users/forgot-password/validate-pin', payload)

// interface forgotPassword {
//   email: string,
//   password: string
// }

const forgotPassword = (payload: loginInterface): Promise<Object> => http.patch('/users/forgot-password', payload)

export {
  login,
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword
}
