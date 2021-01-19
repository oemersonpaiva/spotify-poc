import api from 'services/api'
import { put, takeLatest } from 'redux-saga/effects'
import { AuthActions, AuthTypes } from 'store/ducks/auth'
import { SessionParams } from 'types/session'
import { UserInfos } from 'types/user'
import { ls, Session } from 'utils/auth/session'
import { GET, AUTH_USER_DATA, authURL } from 'utils/constants'
import { history } from 'routes'

type SignIn = {
  type: string
}

type SignInSuccess = SignIn & {
  sessionParams: SessionParams
}

function* signIn({ type }: SignIn) {
  try {
    window.location.href = authURL
  } catch ({ response }) {
    yield put(AuthActions.authRequestRejected(response, type))
  }
}

function* signInSuccess({ type, sessionParams }: SignInSuccess) {
  try {
    const { accessToken, tokenType, expireTime } = sessionParams

    ls.set(Session.ACCESS_TOKEN, accessToken)
    ls.set(Session.TOKEN_TYPE, tokenType)
    ls.set(Session.EXPIRE_TIME, expireTime)
    history.push('/')
  } catch ({ response }) {
    yield put(AuthActions.authRequestRejected(response, type))
  }
}

function* fetchAuthUserData({ type }: SignIn) {
  try {
    const {
      data: { id, display_name, images }
    } = yield api({
      url: AUTH_USER_DATA,
      method: GET
    })

    const userInfos = {
      id: id,
      username: display_name,
      avatarUrl: images[0].url
    } as UserInfos
    yield put(AuthActions.fetchAuthUserDataSuccess(userInfos))
  } catch ({ response }) {
    yield put(AuthActions.authRequestRejected(response, type))
  }
}

export function* watchSagas() {
  yield takeLatest(AuthTypes.SIGN_IN, signIn)
  yield takeLatest(AuthTypes.SIGN_IN_SUCCESS, signInSuccess)
  yield takeLatest(AuthTypes.FETCH_AUTH_USER_DATA, fetchAuthUserData)
}
