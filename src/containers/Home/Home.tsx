import { Navbar } from 'components/structure'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/ducks'
import { AuthActions, AuthState } from 'store/ducks/auth'

const Home = () => {
  const dispatch = useDispatch()
  const { user }: AuthState = useSelector(({ auth }: RootState) => auth)

  useEffect(() => {
    dispatch(AuthActions.fetchAuthUserData())
  }, [dispatch])

  return (
    <>
      <Navbar
        avatarUrl={user?.avatarUrl ?? ''}
        username={user?.username ?? ''}
      />
    </>
  )
}

export default Home
