import { put, takeLatest } from 'redux-saga/effects'
import authService from 'services/auth'
import { POST } from 'utils/constants/verbs'
import { AuthActions, AuthTypes } from 'store/ducks/auth'

interface SignIn {
  type: string
}

function* signIn({ type }: SignIn) {
  // TODO move keys to .env
  try {
    const { data } = yield authService({
      method: POST,
      url: 'token',
      data: 'grant_type=client_credentials',
      headers: {
        Authorization: `Basic ${btoa(
          'd45014c70903415d82367378cb49d0b6:c0ad9b8e347f4165a9d74ab7f4d00bf4'
        )}`
      }
    })
    yield put(AuthActions.signInSuccess(data?.access_token))
  } catch ({ response }) {
    yield put(AuthActions.authRequestRejected(response, type))
  }
}

export function* watchSagas() {
  yield takeLatest(AuthTypes.SIGN_IN, signIn)
}
