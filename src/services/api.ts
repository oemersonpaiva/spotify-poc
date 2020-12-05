import axios, { AxiosRequestConfig } from 'axios'
import { isAuthenticated, getAuthClaims } from 'utils/auth/session'
import { baseURL } from 'utils/constants/endpoints'

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (isAuthenticated()) {
    config.headers.Authorization = `Bearer ${getAuthClaims()}`
  }

  return config
})

export default api
