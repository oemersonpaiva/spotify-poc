import axios, { AxiosRequestConfig } from 'axios'
import { isAuthenticated, ls, Session } from 'utils/auth/session'
import { baseURL } from 'utils/constants/endpoints'

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (isAuthenticated()) {
    config.headers.Authorization = `${ls.get(Session.TOKEN_TYPE)} ${ls.get(
      Session.ACCESS_TOKEN
    )}`
  }

  return config
})

// TODO add 401 and refresh token
export default api
