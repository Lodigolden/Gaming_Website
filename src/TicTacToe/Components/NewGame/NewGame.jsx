import styles from './NewGame.module.css'

import PropTypes from 'prop-types'

///////////////////////////////////////////////////////////////////////////////
/**
 * * A NewGame component for the game site.
 * 
 * @param onNewGameClick Function that handles clicking a new game.
 * 
 * TODO: This component is not done yet.
 */
///////////////////////////////////////////////////////////////////////////////
function NewGame({ onNewGameClick }) {
  return(
    <div
      className={ styles.newgame }
      onClick={ onNewGameClick }
    >
      <h1 className={ styles.title }>New Game</h1>
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////
// * Prop data types.
///////////////////////////////////////////////////////////////////////////////
NewGame.propTypes = {
  onNeweGameClick: PropTypes.func,
};

export default NewGame;