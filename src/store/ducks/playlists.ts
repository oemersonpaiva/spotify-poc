import { AxiosResponse } from 'axios'
import { Playlist } from 'types/playlist'
import { PutEffect } from 'redux-saga/effects'
import { createActions, createReducer } from 'reduxsauce'
import { REQUEST } from 'utils/constants/request'
import { FailureRequest } from 'utils/types/request'

export const {
  Types: PlaylistsTypes,
  Creators: PlaylistsActions
} = createActions({
  fetchPlaylists: ['params'],
  fetchPlaylistsSuccess: ['payload'],
  authRequestRejected: ['response', 'originalType']
})

// TODO update types e interfaces
export type Params = {
  country: string
  locale: string
  timestamp: string
  limit: number
  offset: string
}

export type FetchPlaylistsSuccess = {
  limit?: number
  next?: number
  offset?: number
  previous?: number
  total?: number
  items: Playlist[]
}

export type PlaylistsState = {
  error?: AxiosResponse
  items?: Playlist[]
  playlistsRequests: {
    [request: string]: string
  }
} & FetchPlaylistsSuccess

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
  { payload }: PutEffect & FetchPlaylistsSuccess
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
