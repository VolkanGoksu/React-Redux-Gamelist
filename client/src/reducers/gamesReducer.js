import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
  } from '../constants/actionsConstants'
  
  export default (games = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload
  
      default:
        return games
    }
  }