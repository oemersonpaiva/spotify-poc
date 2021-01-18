import { AxiosResponse } from 'axios'
import { PutEffect } from 'redux-saga/effects'
import { createActions, createReducer } from 'reduxsauce'
import { REQUEST } from 'utils/constants/request'
import { FailureRequest } from 'utils/types/request'

export const { Types: AuthTypes, Creators: AuthActions } = createActions({
  signIn: [],
  signInSuccess: ['sessionParams'],
  fetchAuthUserData: [],
  fetchAuthUserDataSuccess: ['user'],
  authRequestRejected: ['response', 'originalType']
})

export interface UserInfos {
  id: string
  avatarUrl: string
  username: string
}

export interface AuthState {
  error?: AxiosResponse
  user?: UserInfos
  authRequests: {
    [request: string]: string
  }
}

const INITIAL_STATE: AuthState = {
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

export const signInSuccess = (state: AuthState) => ({
  ...state,
  authRequests: {
    ...state.authRequests,
    [AuthTypes.SIGN_IN]: REQUEST.RESOLVED
  }
})

export const fetchAuthUserData = (state: AuthState) => ({
  ...state,
  authRequests: {
    ...state.authRequests,
    [AuthTypes.FETCH_AUTH_USER_DATA]: REQUEST.RESOLVED
  }
})

export const fetchAuthUserDataSuccess = (
  state: AuthState,
  { user }: PutEffect & { user: UserInfos }
) => ({
  ...state,
  user,
  authRequests: {
    ...state.authRequests,
    [AuthTypes.FETCH_AUTH_USER_DATA]: REQUEST.RESOLVED
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
  [AuthTypes.FETCH_AUTH_USER_DATA]: fetchAuthUserData,
  [AuthTypes.FETCH_AUTH_USER_DATA_SUCCESS]: fetchAuthUserDataSuccess,
  [AuthTypes.AUTH_REQUEST_REJECTED]: authRequestRejected
})
