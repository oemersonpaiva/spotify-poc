import { createActions, createReducer } from 'reduxsauce'
import {
  REQUEST_NOT_STARTED,
  REQUEST_PENDING,
  REQUEST_REJECTED,
  REQUEST_RESOLVED
} from 'utils/constants/request'

export const { Types: UsersTypes, Creators: UsersActions } = createActions({
  fetchUserById: ['id'],
  fetchUserByIdSuccess: ['payload'],
  usersRequestFailure: ['error', 'originalType']
})

interface UsersState {
  user: string
  usersRequests: {
    [request: string]: string
  }
}

const INITIAL_STATE: UsersState = {
  user: '',
  usersRequests: {
    [UsersTypes.FETCH_USER_BY_ID]: REQUEST_NOT_STARTED
  }
}

export const fetchUserById = (state: UsersState) => ({
  ...state,
  usersRequests: {
    ...state.usersRequests,
    [UsersTypes.FETCH_USER_BY_ID]: REQUEST_PENDING
  }
})

export const fetchUserByIdSuccess = (state: UsersState, { payload = '' }) => ({
  ...state,
  user: payload,
  usersRequests: {
    ...state.usersRequests,
    [UsersTypes.FETCH_USER_BY_ID]: REQUEST_RESOLVED
  }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usersRequestFailure = (state: UsersState, { error }: any) => ({
  ...state,
  error,
  usersRequests: {
    ...state.usersRequests,
    [UsersTypes.FETCH_ONLINE_USERS_BY_INTEREST]: REQUEST_REJECTED
  }
})

export default createReducer(INITIAL_STATE, {
  [UsersTypes.FETCH_USER_BY_ID]: fetchUserById,
  [UsersTypes.FETCH_USER_BY_ID_SUCCESS]: fetchUserByIdSuccess,
  [UsersTypes.USERS_REQUEST_FAILURE]: usersRequestFailure
})
