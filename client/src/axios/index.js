import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})

export const fetchGames = async () => await API.get('/games')

export const fetchGame = async (id) => await API.get(`/games/${id}`)

export const createGame = async (newGame) => await API.post('/games',newGame)

export const deleteGame = async (id) => await API.delete(`/games/${id}`)

export const updateGame = async (id,updatedGame) => await API.put(`/games/${id}`,updatedGame)

