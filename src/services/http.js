// import { useAuthentication, store } from '../store'
import { store } from '../store'
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
    // const { token } = useAuthentication()
    const token = store.get().token
    console.log({ token })
    request.headers.Authorization = token && concat('Bearer ', token)
    return Promise.resolve(request)
  })

http.interceptors.response.use(
  response => response,
  error => {
    // const { status } = error.response
    // if (status === 401) {
    //   // Logout
    // }
    return Promise.reject(error)
  })

export default http
