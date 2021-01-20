import Playlists from 'components/presentational/Playlists/Playlists'
import { Navbar } from 'components/structure'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducers'
import { AuthActions, AuthState } from 'store/auth'
import { PlaylistsActions, PlaylistsState } from 'store/playlists'

// TODO adicionar modal para quando o usuario não estiver logado
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

  useEffect(() => {
    dispatch(PlaylistsActions.fetchFilters())
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
