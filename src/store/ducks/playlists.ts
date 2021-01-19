import { AxiosResponse } from 'axios'
import { Playlists } from 'types/playlist'
import { PutEffect } from 'redux-saga/effects'
import { createActions, createReducer } from 'reduxsauce'
import { REQUEST } from 'utils/constants/request'
import { FailureRequest } from 'types/request'

export const {
  Types: PlaylistsTypes,
  Creators: PlaylistsActions
} = createActions({
  fetchPlaylists: ['params'],
  fetchPlaylistsSuccess: ['payload'],
  authRequestRejected: ['response', 'originalType']
})

export type PlaylistsState = {
  error?: AxiosResponse
  playlistsRequests: {
    [request: string]: string
  }
} & Playlists

const INITIAL_STATE: PlaylistsState = {
  items: [],
  playlistsRequests: {
    [PlaylistsTypes.FETCH_PLAYLISTS]: REQUEST.NOT_STARTED
  }
}

export const fetchPlaylists = (state: PlaylistsState) => ({
  ...state,
  playlistsRequests: {
    ...state.playlistsRequests,
    [PlaylistsTypes.FETCH_PLAYLISTS]: REQUEST.PENDING
  }
})

export const fetchPlaylistsSuccess = (
  state: PlaylistsState,
  { payload }: PutEffect & Playlists
) => ({
  ...state,
  ...payload,
  playlistsRequests: {
    ...state.playlistsRequests,
    [PlaylistsTypes.FETCH_PLAYLISTS]: REQUEST.RESOLVED
  }
})

export const authRequestRejected = (
  state: PlaylistsState,
  { response, originalType }: FailureRequest
) => ({
  ...state,
  error: response,
  playlistsRequests: {
    ...state.playlistsRequests,
    [originalType]: REQUEST.REJECTED
  }
})

export default createReducer(INITIAL_STATE, {
  [PlaylistsTypes.FETCH_PLAYLISTS]: fetchPlaylists,
  [PlaylistsTypes.FETCH_PLAYLISTS_SUCCESS]: fetchPlaylistsSuccess,
  [PlaylistsTypes.AUTH_REQUEST_REJECTED]: authRequestRejected
})
