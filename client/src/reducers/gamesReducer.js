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
      
      case CREATE:
        return[...games,action.payload]

        case DELETE :
          return games.filter((games)=>games._id !== action.payload)

          case UPDATE :
            return games.map((game)=>
              game._id === action.payload._id ? action.payload : game
            )
      default:
        return games
    }
  }