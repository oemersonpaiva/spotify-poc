import { all } from 'redux-saga/effects'
import * as usersSagas from './users'

function* sagas() {
  yield all([usersSagas.watchSagas()])
}

export default sagas
