import React from 'react'
import { connect } from "react-redux"

const Player = (props) => {
  console.log("props",props)
  return (
    <div onClick={() =>
      props.selectPlayer(props.player)}>
      <p>{props.player.name}</p>
    </div>
  )
}

const selectPlayer = (player) => {
  return {type:"SELECT_PLAYER", payload:player}
}

const mapStateToProps = (state) => {
  return {selectedPlayer:state.selectedPlayer}
}

const mapDispatchToProps = (dispatch) => {
  return {selectPlayer: (player) => dispatch(selectPlayer(player))}
}



export default connect(mapStateToProps, mapDispatchToProps)(Player)
