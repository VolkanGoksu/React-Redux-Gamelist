import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})

export const createGame = async (newGame) => API.post('/games',newGame)