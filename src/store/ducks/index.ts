import { combineReducers } from 'redux'
import auth from './auth'
import playlists from './playlists'

const rootReducer = combineReducers({
  auth,
  playlists
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
