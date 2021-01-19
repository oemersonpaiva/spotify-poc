import { AxiosResponse } from 'axios'

export type FailureRequest = {
  response: AxiosResponse
  originalType: string
}
