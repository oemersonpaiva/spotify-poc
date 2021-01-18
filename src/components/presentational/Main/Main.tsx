import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/ducks'
import { AuthActions, AuthState } from 'store/ducks/auth'

const Main = () => {
  const dispatch = useDispatch()
  const { user }: AuthState = useSelector(({ auth }: RootState) => auth)

  useEffect(() => {
    console.log(user)
  }, [user])

  useEffect(() => {
    dispatch(AuthActions.fetchAuthUserData())
  }, [dispatch])

  return <h1>LOGADO</h1>
}

export default Main
