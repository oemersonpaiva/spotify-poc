import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'
import api from 'services/api'
import { PlaylistParams } from 'types/playlist'
import { FEATURED_PLAYLISTS, filtersURL, GET } from 'utils/constants'
import { PlaylistsActions, PlaylistsTypes } from './playlists.actions'

export type FetchPlaylistTypes = {
  type: string
  params: PlaylistParams
  url: string
}

function* fetchPlaylists({ type, params }: FetchPlaylistTypes) {
  try {
    Object.keys(params).forEach((key) => !params[key] && delete params[key])

    const {
      data: { playlists, message }
    } = yield api({
      url: FEATURED_PLAYLISTS,
      params
    })
    yield put(PlaylistsActions.fetchPlaylistsSuccess(playlists, message))
  } catch ({ response }) {
    yield put(PlaylistsActions.playlistsRequestRejected(response, type))
  }
}

function* fetchPlaylistsWithPointer({ type, url }: FetchPlaylistTypes) {
  try {
    const {
      data: { playlists, message }
    } = yield api({ url })
    yield put(PlaylistsActions.fetchPlaylistsSuccess(playlists, message))
  } catch ({ response }) {
    yield put(PlaylistsActions.playlistsRequestRejected(response, type))
  }
}

function* fetchFilters({ type }: FetchPlaylistTypes) {
  try {
    const {
      data: { filters }
    } = yield axios({
      baseURL: filtersURL,
      method: GET
    })
    yield put(PlaylistsActions.fetchFiltersSuccess(filters))
  } catch ({ response }) {
    yield put(PlaylistsActions.playlistsRequestRejected(response, type))
  }
}

export function* watchSagas() {
  yield takeLatest(PlaylistsTypes.FETCH_PLAYLISTS, fetchPlaylists)
  yield takeLatest(
    PlaylistsTypes.FETCH_PLAYLISTS_WITH_POINTER,
    fetchPlaylistsWithPointer
  )
  yield takeLatest(PlaylistsTypes.FETCH_FILTERS, fetchFilters)
}
