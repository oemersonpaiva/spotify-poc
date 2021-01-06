import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthActions } from 'store/ducks/auth'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AuthActions.signIn())
    // axios('https://accounts.spotify.com/api/token', {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     Authorization:
    //       'Basic ' +
    //       btoa(
    //         'd45014c70903415d82367378cb49d0b6' +
    //           ':' +
    //           'c0ad9b8e347f4165a9d74ab7f4d00bf4'
    //       )
    //   },
    //   data: 'grant_type=client_credentials',
    //   method: 'POST'
    // }).then((tokenResponse) => {
    //   console.log(tokenResponse)

    //   axios('https://api.spotify.com/v1/browse/featured-playlists', {
    //     method: 'GET',
    //     headers: { Authorization: 'Bearer ' + tokenResponse.data.access_token }
    //   }).then((response) => {
    //     console.log(response)
    //   })
    // })
  }, [dispatch])

  return (
    <main>
      <h1>React Template</h1>
    </main>
  )
}

export default Main
