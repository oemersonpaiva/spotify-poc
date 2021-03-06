import { AxiosResponse } from 'axios'
import { PutEffect } from 'redux-saga/effects'
import { createReducer } from 'reduxsauce'
import { PlaylistFilter, Playlists, PlaylistParams } from 'types/playlist'
import { FailureRequest } from 'types/request'
import { REQUEST } from 'utils/constants/request'
import { PlaylistsTypes } from './playlists.actions'

export type PlaylistsState = Playlists &
  PlaylistParams & {
    error?: AxiosResponse
    filters: PlaylistFilter[]
    message: string
    playlistsRequests: {
      [request: string]: string
    }
  }

const INITIAL_STATE = {
  items: [],
  filters: [],
  offset: 0,
  total: 0,
  limit: 20,
  message: '',
  playlistsRequests: {
    [PlaylistsTypes.FETCH_PLAYLISTS]: REQUEST.NOT_STARTED,
    [PlaylistsTypes.FETCH_FILTERS]: REQUEST.NOT_STARTED
  }
} as PlaylistsState

export const fetchPlaylists = (state: PlaylistsState) => ({
  ...state,
  playlistsRequests: {
    ...state.playlistsRequests,
    [PlaylistsTypes.FETCH_PLAYLISTS]: REQUEST.PENDING
  }
})
export const fetchPlaylistsWithPointer = (state: PlaylistsState) => ({
  ...state,
  playlistsRequests: {
    ...state.playlistsRequests,
    [PlaylistsTypes.FETCH_PLAYLISTS]: REQUEST.PENDING
  }
})

type FetchPlaylistsSuccess = PutEffect &
  Playlists & {
    message: string
    params?: PlaylistParams
  }

export const fetchPlaylistsSuccess = (
  state: PlaylistsState,
  { payload, message, params }: FetchPlaylistsSuccess
) => ({
  ...state,
  ...payload,
  ...params,
  message,
  playlistsRequests: {
    ...state.playlistsRequests,
    [PlaylistsTypes.FETCH_PLAYLISTS]: REQUEST.RESOLVED
  }
})

export const fetchFilters = (state: PlaylistsState) => ({
  ...state,
  playlistsRequests: {
    ...state.playlistsRequests,
    [PlaylistsTypes.FETCH_FILTERS]: REQUEST.PENDING
  }
})

export const fetchFiltersSuccess = (
  state: PlaylistsState,
  { payload }: PutEffect & { payload: PlaylistFilter[] }
) => ({
  ...state,
  filters: payload,
  playlistsRequests: {
    ...state.playlistsRequests,
    [PlaylistsTypes.FETCH_FILTERS]: REQUEST.RESOLVED
  }
})

export const playlistsRequestRejected = (
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
  [PlaylistsTypes.FETCH_PLAYLISTS_WITH_POINTER]: fetchPlaylistsWithPointer,
  [PlaylistsTypes.FETCH_PLAYLISTS_SUCCESS]: fetchPlaylistsSuccess,
  [PlaylistsTypes.FETCH_FILTERS]: fetchFilters,
  [PlaylistsTypes.FETCH_FILTERS_SUCCESS]: fetchFiltersSuccess,
  [PlaylistsTypes.PLAYLISTS_REQUEST_REJECTED]: playlistsRequestRejected
})
