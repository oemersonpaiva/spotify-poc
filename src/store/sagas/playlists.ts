import { put, takeLatest } from 'redux-saga/effects'
import api from 'services/api'
import { PlaylistsActions, PlaylistsTypes } from 'store/ducks/playlists'
import { Playlists, PlaylistParams } from 'types/playlist'
import { FEATURED_PLAYLISTS, GET } from 'utils/constants'

export type FetchPlaylistTypes = {
  type: string
  params: PlaylistParams
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
    yield put(PlaylistsActions.fetchPlaylistsSuccess(playlists as Playlists))
  } catch ({ response }) {
    yield put(PlaylistsActions.authRequestRejected(response, type))
  }
}

export function* watchSagas() {
  yield takeLatest(PlaylistsTypes.FETCH_PLAYLISTS, fetchPlaylists)
}
