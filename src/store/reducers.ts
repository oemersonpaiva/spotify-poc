import { combineReducers } from 'redux'
import auth from './auth/auth.reducer'
import playlists from './playlists/playlists.reducer'

const rootReducer = combineReducers({
  auth,
  playlists
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
