import { store } from '../store'
import errorsMessage from '../support/errorsMessage'
import axios from 'axios'
import { concat } from 'ramda'

const http = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(
  request => {
    const token = store.get().token
    console.log({ token })
    request.headers.Authorization = token && concat('Bearer ', token)
    return Promise.resolve(request)
  })

http.interceptors.response.use(
  response => response && response.data,
  error => {
    const message = errorsMessage(error.response.data.errors)
    return Promise.reject({ message })
  })

export default http
