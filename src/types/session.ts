export type ParamsFromURL = {
  access_token: string
  token_type: string
  expires_in: number
  [key: string]: string | number
}

export type SessionParams = {
  accessToken: string
  tokenType: string
  expireTime: string
}
