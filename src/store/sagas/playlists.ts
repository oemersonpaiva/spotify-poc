import { put, takeLatest } from 'redux-saga/effects'
import api from 'services/api'
import {
  FetchPlaylistsSuccess,
  Params,
  PlaylistsActions,
  PlaylistsTypes
} from 'store/ducks/playlists'
import { FEATURED_PLAYLISTS, GET } from 'utils/constants'

export type FetchPlaylistTypes = {
  type: string
  params: Params
}

function* fetchPlaylists({ type, params }: FetchPlaylistTypes) {
  try {
    const {
      data: { playlists }
    } = yield api({
      url: FEATURED_PLAYLISTS,
      method: GET,
      params
    })
    yield put(
      PlaylistsActions.fetchPlaylistsSuccess(playlists as FetchPlaylistsSuccess)
    )
  } catch ({ response }) {
    yield put(PlaylistsActions.authRequestRejected(response, type))
  }
}

export function* watchSagas() {
  yield takeLatest(PlaylistsTypes.FETCH_PLAYLISTS, fetchPlaylists)
}
