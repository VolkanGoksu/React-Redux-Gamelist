import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  
})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user')).accessToken
    }`
  }
  return req
})


export const fetchGames = async () => await API.get('/games')

export const fetchGame = async (id) => await API.get(`/games/${id}`)

export const createGame = async (newGame) => await API.post('/games',newGame)

export const deleteGame = async (id) => await API.delete(`/games/${id}`)

export const updateGame = async (id,updatedGame) => await API.put(`/games/${id}`,updatedGame)

export const signUp = async (formData)=> await API.post('/users/signup',formData)

export const signIn = async (formData) => await API.post('/users/signin', formData)

export const logOut = async (id) => await API.get(`/users/logout/${id}`)

export const refreshAccessToken = async (userId) =>
  await API.get(`/users/refresh/${userId}`)


