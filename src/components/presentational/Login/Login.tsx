import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthActions } from 'store/auth'
import useURLParams from 'hooks/useURLParams'

const Login = () => {
  const dispatch = useDispatch()
  const sessionParams = useURLParams()

  const handleLogin = () => dispatch(AuthActions.signIn())

  useEffect(() => {
    if (sessionParams?.accessToken) {
      dispatch(AuthActions.signInSuccess(sessionParams))
    }
  }, [dispatch, sessionParams])

  return (
    <div>
      <button type="submit" onClick={handleLogin}>
        Login to spotify
      </button>
    </div>
  )
}

export default Login
