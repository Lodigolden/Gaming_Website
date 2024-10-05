import PropTypes from 'prop-types'
import { useState } from 'react'

import Title from '../../../SiteOverview/Components/Title/Title.jsx'
import Tile from '../Tile/Tile.jsx'
import styles from './GameBoard.module.css'

///////////////////////////////////////////////////////////////////////////////
/**
 * A GameBoard component for the Tic Tac Toe game.
 * 
 * TODO: This component is not done yet.
 */
///////////////////////////////////////////////////////////////////////////////
function GameBoard() {

  return(
    <>
      <Title />
      <div className={ styles.gameboard }>
        <Tile value='X' />
        <Tile value='O' />
        <Tile value='X' />
        <Tile value='O' />
        <Tile value='X' />
        <Tile value='O' />
        <Tile value='X' />
        <Tile value='O' />
        <Tile value='X' />
      </div>
    </>
  );
}

export default GameBoard;