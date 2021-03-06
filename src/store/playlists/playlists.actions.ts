import { AxiosResponse } from 'axios'
import {
  createActions,
  DefaultActionCreators,
  DefaultActionTypes
} from 'reduxsauce'
import { PlaylistFilter, Playlists, PlaylistParams } from 'types/playlist'

export enum PlaylistsTypes {
  FETCH_PLAYLISTS = 'FETCH_PLAYLISTS',
  FETCH_PLAYLISTS_WITH_POINTER = 'FETCH_PLAYLISTS_WITH_POINTER',
  FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS',
  FETCH_FILTERS = 'FETCH_FILTERS',
  FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS',
  PLAYLISTS_REQUEST_REJECTED = 'PLAYLISTS_REQUEST_REJECTED'
}

interface IPlaylistsCreators extends DefaultActionCreators {
  fetchPlaylists: (
    params: PlaylistParams
  ) => { type: PlaylistsTypes.FETCH_PLAYLISTS }
  fetchPlaylistsWithPointer: (
    url: string
  ) => { type: PlaylistsTypes.FETCH_PLAYLISTS_WITH_POINTER }
  fetchPlaylistsSuccess: (
    payload: Playlists,
    message: string,
    params?: PlaylistParams
  ) => { type: PlaylistsTypes.FETCH_PLAYLISTS_SUCCESS; payload: Playlists }
  fetchFilters: () => { type: PlaylistsTypes.FETCH_FILTERS }
  fetchFiltersSuccess: (
    payload: PlaylistFilter[]
  ) => {
    type: PlaylistsTypes.FETCH_FILTERS_SUCCESS
    payload: PlaylistFilter[]
  }
  playlistsRequestRejected: (
    response: AxiosResponse,
    originalType: string
  ) => {
    type: PlaylistsTypes.PLAYLISTS_REQUEST_REJECTED
  }
}

export const { Creators: PlaylistsActions } = createActions<
  DefaultActionTypes,
  IPlaylistsCreators
>({
  fetchPlaylists: ['params'],
  fetchPlaylistsWithPointer: ['url'],
  fetchPlaylistsSuccess: ['payload', 'message', 'params'],
  fetchFilters: [],
  fetchFiltersSuccess: ['payload'],
  playlistsRequestRejected: ['response', 'originalType']
})
