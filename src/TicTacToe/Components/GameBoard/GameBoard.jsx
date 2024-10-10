import PropTypes from 'prop-types'
import { useState } from 'react'

import Tile from '../Tile/Tile.jsx'

import styles from './GameBoard.module.css'
import tileStyles from '../Tile/Tile.module.css'

///////////////////////////////////////////////////////////////////////////////
/**
 * A GameBoard component for the Tic Tac Toe game.
 * 
 * @param onTileClick Function that handles tile click.
 * @param state       The state of the game.
 * 
 * TODO: This component is not done yet.
 */
///////////////////////////////////////////////////////////////////////////////
function GameBoard({ onTileClick, state }) {

  return(
    <>
      <div className={ styles.gameboard }>
        <Tile 
          border={ `${ tileStyles.bottom } ${ tileStyles.right }` }
          onTileClick={ () => onTileClick(0) }
          state={ state[0] }
        />
        <Tile 
          border={ `${ tileStyles.bottom } ${ tileStyles.right }` }
          onTileClick={ () => onTileClick(1) }
          state={ state[1] }
        />
        <Tile 
          border={ `${ tileStyles.bottom }` }
          onTileClick={ () => onTileClick(2) }
          state={ state[2] }
        />
        <Tile 
          border={ `${ tileStyles.bottom } ${ tileStyles.right }` }
          onTileClick={ () => onTileClick(3) }
          state={ state[3] }
        />
        <Tile 
          border={ `${ tileStyles.bottom } ${ tileStyles.right }` }
          onTileClick={ () => onTileClick(4) }
          state={ state[4] }
        />
        <Tile 
          border={ `${ tileStyles.bottom }` }
          onTileClick={ () => onTileClick(5) }
          state={ state[5] }
        />
        <Tile 
          border={ `${ tileStyles.right }` }
          onTileClick={ () => onTileClick(6) }
          state={ state[6] }
        />
        <Tile 
          border={ `${ tileStyles.right }` }
          onTileClick={ () => onTileClick(7) }
          state={ state[7] }
        />
        <Tile 
          onTileClick={ () => onTileClick(8) }
          state={ state[8] }
        />
      </div>
    </>
  );
}

///////////////////////////////////////////////////////////////////////////////
// * Prop data types.
///////////////////////////////////////////////////////////////////////////////
GameBoard.propTypes = {
  onTileClick: PropTypes.func,
  state:       PropTypes.arrayOf(PropTypes.string),
};

export default GameBoard;
