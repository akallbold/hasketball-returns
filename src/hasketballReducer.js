import React from "react"
import gamesData from './gamesData'
// import * from "redux"

function hasketballReducer(state={
  teams: gamesData.teams,
  selectedPlayer: ""
}, action){
  switch (action.type){
    case "SELECT_PLAYER":
      return {
          ...state, selectedPlayer: action.payload
        }
    default :
      return state
  }

}
// state = {
//   teams: gamesData.teams,
//   selectedPlayer: null
// }




export default hasketballReducer
