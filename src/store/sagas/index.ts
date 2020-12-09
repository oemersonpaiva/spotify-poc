import { all } from 'redux-saga/effects'
import * as authSagas from './auth'

function* sagas() {
  yield all([authSagas.watchSagas()])
}

export default sagas
