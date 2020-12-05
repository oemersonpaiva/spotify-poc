export const baseURL = process.env.REACT_APP_API_URL

const usersPrefix = 'users'

export const USER_BY_ID = (id: number) => `${usersPrefix}/${id}`
