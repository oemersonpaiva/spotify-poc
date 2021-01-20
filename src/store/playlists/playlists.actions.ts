import {
  createActions,
  DefaultActionCreators,
  DefaultActionTypes
} from 'reduxsauce'
import { Filters, Playlists } from 'types/playlist'

export enum PlaylistsTypes {
  FETCH_PLAYLISTS = 'FETCH_PLAYLISTS',
  FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS',
  FETCH_FILTERS = 'FETCH_FILTERS',
  FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS',
  PLAYLISTS_REQUEST_REJECTED = 'PLAYLISTS_REQUEST_REJECTED'
}

interface IPlaylistsCreators extends DefaultActionCreators {
  fetchPlaylists: () => { type: PlaylistsTypes.FETCH_PLAYLISTS }
  fetchPlaylistsSuccess: (
    payload: Playlists
  ) => { type: PlaylistsTypes.FETCH_PLAYLISTS_SUCCESS; payload: Playlists }
  fetchFilters: () => { type: PlaylistsTypes.FETCH_FILTERS }
  fetchFiltersSuccess: (
    payload: Filters[]
  ) => {
    type: PlaylistsTypes.FETCH_FILTERS_SUCCESS
    payload: Filters[]
  }
  playlistsRequestRejected: () => {
    type: PlaylistsTypes.PLAYLISTS_REQUEST_REJECTED
  }
}

export const { Creators: PlaylistsActions } = createActions<
  DefaultActionTypes,
  IPlaylistsCreators
>({
  fetchPlaylists: ['params'],
  fetchPlaylistsSuccess: ['payload'],
  fetchFilters: [],
  fetchFiltersSuccess: ['payload'],
  playlistsRequestRejected: ['response', 'originalType']
})
