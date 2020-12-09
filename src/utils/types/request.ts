import { AxiosResponse } from 'axios'

export interface FailureRequest {
  response: AxiosResponse
  originalType: string
}
