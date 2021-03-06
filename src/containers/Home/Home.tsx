import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/reducers'
import { AuthActions, AuthState } from 'store/auth'
import { PlaylistsActions, PlaylistsState } from 'store/playlists'
import { Playlists, PlaylistsFilters } from 'components/presentational'
import { Heading, Navbar, Pagination } from 'components/structure'
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
    href: pointer,
    message
  }: PlaylistsState = useSelector(({ playlists }: RootState) => playlists)

  // TODO pagination
  const handleClick = (url: string) =>
    dispatch(PlaylistsActions.fetchPlaylistsWithPointer(url))

  useEffect(() => {
    dispatch(AuthActions.fetchAuthUserData())
  }, [dispatch])

  // TODO temp
  useEffect(() => {
    dispatch(PlaylistsActions.fetchPlaylists({ limit: 4 } as PlaylistParams))
  }, [dispatch])

  // useEffect(() => {
  //   if (pointer) {
  //     const interval = setInterval(
  //       () => dispatch(PlaylistsActions.fetchPlaylistsWithPointer(pointer)),
  //       FETCH_INTERVAL
  //     )
  //     return () => clearInterval(interval)
  //   }
  // }, [dispatch, pointer])

  // TODO execute after open filters collapse - filters container?
  useEffect(() => {
    dispatch(PlaylistsActions.fetchFilters())
  }, [dispatch])

  return (
    <>
      <Navbar avatarUrl={user.avatarUrl} username={user.username} />
      {/* TODO fetch filters only after collapse box */}
      <PlaylistsFilters filters={filters} />
      <Heading as="h1" large center>
        {message}
      </Heading>
      <Playlists playlists={items} />
      <Pagination
        handleClickPrevious={() => handleClick(previous)}
        handleClickNext={() => handleClick(next)}
        disablePrevious={!previous}
        disableNext={!next}
      />
    </>
  )
}

export default Home
