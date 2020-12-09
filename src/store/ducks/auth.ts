import { AxiosResponse } from 'axios'
import { createActions, createReducer } from 'reduxsauce'
import { REQUEST } from 'utils/constants/request'
import { FailureRequest } from 'utils/types/request'

export const { Types: AuthTypes, Creators: AuthActions } = createActions({
  signIn: [],
  signInSuccess: ['accessToken'],
  authRequestRejected: ['response', 'originalType']
})

interface AuthState {
  accessToken: string
  error?: AxiosResponse
  authRequests: {
    [request: string]: string
  }
}

const INITIAL_STATE: AuthState = {
  accessToken: '',
  authRequests: {
    [AuthTypes.SIGN_IN]: REQUEST.NOT_STARTED
  }
}

export const signIn = (state: AuthState) => ({
  ...state,
  authRequests: {
    ...state.authRequests,
    [AuthTypes.SIGN_IN]: REQUEST.PENDING
  }
})

export const signInSuccess = (
  state: AuthState,
  { accessToken }: AuthState
) => ({
  ...state,
  accessToken,
  authRequests: {
    ...state.authRequests,
    [AuthTypes.SIGN_IN]: REQUEST.RESOLVED
  }
})

export const authRequestRejected = (
  state: AuthState,
  { response, originalType }: FailureRequest
) => ({
  ...state,
  error: response,
  authRequests: {
    ...state.authRequests,
    [originalType]: REQUEST.REJECTED
  }
})

export default createReducer(INITIAL_STATE, {
  [AuthTypes.SIGN_IN]: signIn,
  [AuthTypes.SIGN_IN_SUCCESS]: signInSuccess,
  [AuthTypes.AUTH_REQUEST_REJECTED]: authRequestRejected
})
