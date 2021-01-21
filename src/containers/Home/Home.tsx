import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducers'
import { AuthActions, AuthState } from 'store/auth'
import { PlaylistsActions, PlaylistsState } from 'store/playlists'
import { Playlists, PlaylistsFilters } from 'components/presentational'
import { Navbar } from 'components/structure'
import { PlaylistParams } from 'types/playlist'

const FETCH_INTERVAL = 30000

const Home = () => {
  const dispatch = useDispatch()
  const { user }: AuthState = useSelector(({ auth }: RootState) => auth)
  const {
    items = [],
    filters = [],
    previous = '',
    next = '',
    href,
    message
  }: PlaylistsState = useSelector(({ playlists }: RootState) => playlists)

  const handleClick = (url: string) =>
    dispatch(PlaylistsActions.fetchPlaylistsWithPointer(url))

  useEffect(() => {
    dispatch(AuthActions.fetchAuthUserData())
  }, [dispatch])

  // TODO temp
  useEffect(() => {
    dispatch(PlaylistsActions.fetchPlaylists({ limit: 4 } as PlaylistParams))
  }, [dispatch])

  useEffect(() => {
    if (href) {
      const interval = setInterval(
        () => dispatch(PlaylistsActions.fetchPlaylistsWithPointer(href)),
        FETCH_INTERVAL
      )
      return () => clearInterval(interval)
    }
  }, [dispatch, href])

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
      <Playlists playlists={items} title={message} />
      {/* TODO component pagination? */}
      <div>
        Pag 1 de 1
        <button
          type="button"
          disabled={!previous}
          onClick={() => handleClick(previous)}
        >
          Back
        </button>
        <button
          type="button"
          disabled={!next}
          onClick={() => handleClick(next)}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Home
