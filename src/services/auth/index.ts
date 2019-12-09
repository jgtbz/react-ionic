import http from '../http'

interface loginInterface {
  email: string,
  password: string
}

const login = (payload: loginInterface): Promise<Object> => http.post('/auth/login', payload)

interface forgotPasswordSendPinInterface {
  email: string,
  password: string
}

const forgotPasswordSendPin = (payload: forgotPasswordSendPinInterface): Promise<Object> => http.patch('/users/forgot-password/send-pin', payload)

interface forgotPasswordValidatePinInterface {
  email: string,
  password: string
}

const forgotPasswordValidatePin = (payload: forgotPasswordValidatePinInterface): Promise<Object> => http.patch('/users/forgot-password/validate-pin', payload)

interface forgotPasswordInterface {
  email: string,
  password: string
}

const forgotPassword = (payload: forgotPasswordInterface): Promise<Object> => http.patch('/users/forgot-password', payload)

export {
  login,
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword
}
