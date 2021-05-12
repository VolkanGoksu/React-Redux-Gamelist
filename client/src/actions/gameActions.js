import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionsConstants';

import * as api from '../axios'

export const fetchGames = () => async (dispatch) => {
    try {
      const { data } = await api.fetchGames()
  
      dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
      console.log(error)
    }
  }

  export const createGame = (game) => async dispatch =>{
    try {
      const{data} = await api.createGame(game)
      dispatch({type:CREATE,payload:data})
    } catch (error) {
      console.log(error);
    }
  }
  export const deleteGame = (id) => async (dispatch) => {
    try {
      await api.deleteGame(id)
  
      dispatch({ type: DELETE, payload: id })
    } catch (error) {
      console.log(error)
    }
  }

  export const updateGame = (id,updatedGame) => async(dispatch) =>{
    try {
      const{data} = await api.updateGame(id,updatedGame)
      
      dispatch({ type: UPDATE, payload: data })
    } catch (error) {
       console.log(error);
    }
  }