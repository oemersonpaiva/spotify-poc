import { all } from 'redux-saga/effects'
import * as authSagas from './auth'
import * as playlistsSagas from './playlists'

function* sagas() {
  yield all([authSagas.watchSagas(), playlistsSagas.watchSagas()])
}

export default sagas
