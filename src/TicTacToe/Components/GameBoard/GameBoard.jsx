import PropTypes from 'prop-types'
import { useState } from 'react'

import Tile from '../Tile/Tile.jsx'

import styles from './GameBoard.module.css'
import tileStyles from '../Tile/Tile.module.css'

///////////////////////////////////////////////////////////////////////////////
/**
 * A GameBoard component for the Tic Tac Toe game.
 * 
 * @param setPlayer1 A function that sets the player.
 * @param player     The current player (true if 1, false if 2).
 * 
 * TODO: This component is not done yet.
 */
///////////////////////////////////////////////////////////////////////////////
function GameBoard({ setPlayer1, player }) {

  return(
    <>
      <div className={ styles.gameboard }>
        <Tile 
          border={ `${ tileStyles.bottom } ${ tileStyles.right }` }
          setPlayer1={ setPlayer1 }
          player={ player }
        />
        <Tile 
          border={ `${ tileStyles.bottom } ${ tileStyles.right }` }
          setPlayer1={ setPlayer1 }
          player={ player }
        />
        <Tile 
          border={ `${ tileStyles.bottom }` }
          setPlayer1={ setPlayer1 }
          player={ player }
        />
        <Tile 
          border={ `${ tileStyles.bottom } ${ tileStyles.right }` }
          setPlayer1={ setPlayer1 }
          player={ player }
        />
        <Tile 
          border={ `${ tileStyles.bottom } ${ tileStyles.right }` }
          setPlayer1={ setPlayer1 }
          player={ player }
        />
        <Tile 
          border={ `${ tileStyles.bottom }` }
          setPlayer1={ setPlayer1 }
          player={ player }
        />
        <Tile 
          border={ `${ tileStyles.right }` }
          setPlayer1={ setPlayer1 }
          player={ player }
        />
        <Tile 
          border={ `${ tileStyles.right }` }
          setPlayer1={ setPlayer1 }
          player={ player }
        />
        <Tile 
          setPlayer1={ setPlayer1 }
          player={ player }
        />
      </div>
    </>
  );
}

///////////////////////////////////////////////////////////////////////////////
// * Prop data types.
///////////////////////////////////////////////////////////////////////////////
GameBoard.propTypes = {
  player: PropTypes.bool,
}

export default GameBoard;