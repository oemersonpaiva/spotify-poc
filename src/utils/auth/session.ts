export enum Session {
  ACCESS_TOKEN = '@spotifood/accessToken',
  TOKEN_TYPE = '@spotifood/tokenType',
  EXPIRE_TIME = '@spotifood/expiresTime'
}

export const ls = {
  set: (key: string, value: string) =>
    localStorage.setItem(key, JSON.stringify(value)),
  get: (key: string) => JSON.parse(localStorage.getItem(key)!)
}

export const isAuthenticated = () => !!ls.get(Session.ACCESS_TOKEN)
