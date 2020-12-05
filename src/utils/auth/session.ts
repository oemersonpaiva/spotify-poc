export const ACCESS_TOKEN = 'access-token'

export const removeClaims = () => localStorage.removeItem(ACCESS_TOKEN)

export const setAuthClaims = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(token))

export const getAuthClaims = () =>
  JSON.parse(localStorage.getItem(ACCESS_TOKEN) ?? '')

export const isAuthenticated = () => !!getAuthClaims()
