import { store } from '../store'
import errorsMessage from '../support/errorsMessage'
import axios from 'axios'
import { concat } from 'ramda'

const http = axios.create({
  // baseURL: 'http://localhost:3000/api/v1',
  baseURL: 'http://192.168.0.47:3000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(
  request => {
    const token = store.get().token
    request.headers.Authorization = token && concat('Bearer ', token)
    return Promise.resolve(request)
  })

http.interceptors.response.use(
  response => response && response.data,
  error => {
    const { message, errors = [] } = error.response.data
    const errorMessage = errorsMessage(errors)
    return Promise.reject({ message: errorMessage || message })
  })

export default http
