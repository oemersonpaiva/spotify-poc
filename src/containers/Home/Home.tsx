import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducers'
import { AuthActions, AuthState } from 'store/auth'
import { PlaylistsActions, PlaylistsState } from 'store/playlists'
import { Playlists, PlaylistsFilters } from 'components/presentational'
import { Navbar } from 'components/structure'
import { PlaylistParams } from 'types/playlist'

// TODO adicionar modal para quando o usuario não estiver logado
const Home = () => {
  const dispatch = useDispatch()
  const { user }: AuthState = useSelector(({ auth }: RootState) => auth)
  const { items = [], filters = [] }: PlaylistsState = useSelector(
    ({ playlists }: RootState) => playlists
  )

  useEffect(() => {
    dispatch(AuthActions.fetchAuthUserData())
  }, [dispatch])

  useEffect(() => {
    dispatch(PlaylistsActions.fetchPlaylists({ limit: 4 } as PlaylistParams))
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
      {/* TODO fetch filters only after collapse box */}
      <PlaylistsFilters filters={filters} />
      <Playlists playlists={items} />
    </>
  )
}

export default Home
