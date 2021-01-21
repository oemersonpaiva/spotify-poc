const {
  REACT_APP_CLIENT_ID,
  REACT_APP_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL
} = process.env

export const baseURL = process.env.REACT_APP_API_URL
export const filtersURL = process.env.REACT_APP_FILTERS_URL
export const authURL = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`

export const AUTH_USER_DATA = 'me'
export const FEATURED_PLAYLISTS = 'browse/featured-playlists'
