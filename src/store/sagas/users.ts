import { put, takeLatest } from 'redux-saga/effects'
import api from 'services/api'
import { USER_BY_ID } from 'utils/constants/endpoints'
import { GET } from 'utils/constants/verbs'
import { UsersActions, UsersTypes } from 'store/ducks/users'

interface UserById {
  id: number
  type: string
}

function* fetchUserById({ id, type }: UserById) {
  try {
    const { data } = yield api({
      method: GET,
      url: USER_BY_ID(id)
    })
    yield put(UsersActions.fetchUserByIdSuccess(data?.user))
  } catch (error) {
    yield put(UsersActions.usersRequestFailure(error, type))
  }
}

export function* watchSagas() {
  yield takeLatest(UsersTypes.FETCH_USER_BY_ID, fetchUserById)
}
