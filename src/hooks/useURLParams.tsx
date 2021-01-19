import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ParamsFromURL, SessionParams } from 'types/session'

export const getURLParams = (url = '') =>
  url
    .slice(1)
    .split('&')
    .reduce((urlParams, current: string) => {
      const [title, value] = current.split('=')
      urlParams[title] = value

      return urlParams
    }, {} as ParamsFromURL)

const useURLParams = () => {
  const location = useLocation()
  const [params, setParams] = useState({})

  useEffect(() => {
    const { access_token, token_type, expires_in } = getURLParams(location.hash)

    setParams({
      accessToken: access_token,
      tokenType: token_type,
      expireTime: new Date().getTime() + expires_in * 1000
    })
  }, [location])

  return params as SessionParams
}

export default useURLParams
