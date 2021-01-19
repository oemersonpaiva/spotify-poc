import Playlists from 'components/presentational/Playlists/Playlists'
import { Navbar } from 'components/structure'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/ducks'
import { AuthActions, AuthState } from 'store/ducks/auth'
import { PlaylistsActions, PlaylistsState } from 'store/ducks/playlists'

const Home = () => {
  const dispatch = useDispatch()
  const { user }: AuthState = useSelector(({ auth }: RootState) => auth)
  const { items = [] }: PlaylistsState = useSelector(
    ({ playlists }: RootState) => playlists
  )

  useEffect(() => {
    dispatch(AuthActions.fetchAuthUserData())
  }, [dispatch])

  useEffect(() => {
    dispatch(PlaylistsActions.fetchPlaylists())
  }, [dispatch])

  return (
    <>
      <Navbar
        avatarUrl={user?.avatarUrl ?? ''}
        username={user?.username ?? ''}
      />
      <Playlists playlists={items} />
    </>
  )
}

export default Home
