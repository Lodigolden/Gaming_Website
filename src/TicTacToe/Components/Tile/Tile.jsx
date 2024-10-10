import styles from './Tile.module.css'

import PropTypes from 'prop-types'

///////////////////////////////////////////////////////////////////////////////
/**
 * * A Tile component for the Tic Tac Toe game.
 * 
 * @param border      What the border of the tile should be.
 * @param onTileClick Function that handles tile click.
 * @param state       The state of the game.
 * 
 * TODO: This component is not done yet.
 */
///////////////////////////////////////////////////////////////////////////////
function Tile({ border, onTileClick, state }) {
  return(
    <div 
      className={ `${ styles.tile } ${ border }` } 
      onClick={ onTileClick }
    >
      <h1 className={ styles.text }>{ state }</h1>
    </div>
  );
};

///////////////////////////////////////////////////////////////////////////////
// * Prop data types.
///////////////////////////////////////////////////////////////////////////////
Tile.propTypes = {
  border:      PropTypes.string,
  onTileClick: PropTypes.func,
  state:       PropTypes.string,
};

export default Tile;
