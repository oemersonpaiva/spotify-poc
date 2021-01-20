import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'
import api from 'services/api'
import { PlaylistParams } from 'types/playlist'
import { FEATURED_PLAYLISTS, GET } from 'utils/constants'
import { PlaylistsActions, PlaylistsTypes } from './playlists.actions'

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
    yield put(PlaylistsActions.fetchPlaylistsSuccess(playlists))
  } catch ({ response }) {
    yield put(PlaylistsActions.playlistsRequestRejected(response, type))
  }
}

function* fetchFilters({ type }: FetchPlaylistTypes) {
  try {
    const {
      data: { filters }
    } = yield axios({
      baseURL: 'http://www.mocky.io/v2',
      url: '5a25fade2e0000213aa90776',
      method: GET
    })
    yield put(PlaylistsActions.fetchFiltersSuccess(filters))
  } catch ({ response }) {
    yield put(PlaylistsActions.playlistsRequestRejected(response, type))
  }
}

export function* watchSagas() {
  yield takeLatest(PlaylistsTypes.FETCH_PLAYLISTS, fetchPlaylists)
  yield takeLatest(PlaylistsTypes.FETCH_FILTERS, fetchFilters)
}
