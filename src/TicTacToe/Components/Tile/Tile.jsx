import PropTypes from 'prop-types'
import { useState } from 'react'

import styles from './Tile.module.css'

///////////////////////////////////////////////////////////////////////////////
/**
 * * A Tile component for the Tic Tac Toe game.
 * 
 * @param border     What the border of the tile should be.
 * @param setPlayer1 A function that sets the player.
 * @param player     The current player (true if 1, false if 2).
 * 
 * TODO: This component is not done yet.
 */
///////////////////////////////////////////////////////////////////////////////
function Tile({ border, setPlayer1, player }) {
  /////////////////////////////////////////////////////////////////////////////
  /**
   * * Sets the value of the tile.
   * 
   * @param m_value If the tile is '', 'X', or 'O'.
   */
  /////////////////////////////////////////////////////////////////////////////
  const [m_value, setTile] = useState('');

  /////////////////////////////////////////////////////////////////////////////
  /**
   * Sets if the tile has been set or not.
   * 
   * @param m_is_set True if the tile is set, false if not.
   */
  /////////////////////////////////////////////////////////////////////////////
  const [m_is_set, set] = useState(false);

  /////////////////////////////////////////////////////////////////////////////
  // * Handles when someone clicks on the tile.
  /////////////////////////////////////////////////////////////////////////////
  const handleTileClick = () => {
    if (!m_is_set) {
      setTile((player === true) ? 'X' : 'O');
      set(true);
      setPlayer1(!player);
    }
  }

  return(
    <div 
      className={ `${styles.tile} ${ border }` } 
      onClick={ handleTileClick }
    >
      <h1 className={ styles.text }>{ m_value }</h1>
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////
// * Prop data types.
///////////////////////////////////////////////////////////////////////////////
Tile.propTypes = {
  border: PropTypes.string,
  player: PropTypes.bool,
};

export default Tile;