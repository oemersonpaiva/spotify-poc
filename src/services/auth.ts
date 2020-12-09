import axios from 'axios'

const authService = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

export default authService
