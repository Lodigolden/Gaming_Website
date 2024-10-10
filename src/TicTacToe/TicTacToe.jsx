import BackButton from '../SiteOverview/Components/BackButton/BackButton.jsx'
import GameBoard from './Components/GameBoard/GameBoard.jsx'
import NewGame from './Components/NewGame/NewGame.jsx'
import Title from '../SiteOverview/Components/Title/Title.jsx'

import React, { useState } from 'react'

const PLAYER_X = 'X'; 
const PLAYER_O = 'O';

///////////////////////////////////////////////////////////////////////////////
/**
 * * The Tic Tac Toe component.
 * 
 * TODO: This component is not finished yet. 
 */
///////////////////////////////////////////////////////////////////////////////
function TicTacToe() {
  /////////////////////////////////////////////////////////////////////////////
  /**
   * * Sets the player.
   * 
   * @param m_is_player1 True if player 1's turn, false if player 2's turn.
   */
  /////////////////////////////////////////////////////////////////////////////
  const [m_player, setPlayer] = useState(PLAYER_X);

  /////////////////////////////////////////////////////////////////////////////
  /**
   * * Sets the state of the tiles.
   * 
   * @param m_state State of the tiles.
   */
  /////////////////////////////////////////////////////////////////////////////
  const [m_state, setState] = useState(Array(9).fill(null));

  /////////////////////////////////////////////////////////////////////////////
  /**
   * * Handles a tile click. 
   * 
   * @param index The tile that was clicked.
   */
  /////////////////////////////////////////////////////////////////////////////
  const handleTileClick = (index) => {
    if (m_state[index] === null)
    {
      // Update state of selected tile:
      const new_state = [...m_state];
      new_state[index] = m_player;
      setState(new_state);

      // Update player:
      if (m_player === PLAYER_X)
      {
        setPlayer(PLAYER_O);
      }
      else
      {
        setPlayer(PLAYER_X);
      }
    }
  };

  /////////////////////////////////////////////////////////////////////////////
  /**
   * * Restarts the game.
   */
  /////////////////////////////////////////////////////////////////////////////
  const handleNewGameClick = () => {
    // Reset the game: 
    const new_state = [...m_state];
    for (let i = 0; i < 9; i++)
    {
      new_state[i] = null;
    }
    setState(new_state);
  };

  return(
    <>
      <BackButton />
      <NewGame 
        onNewGameClick={ handleNewGameClick }
      />
      <Title 
        title={ 'Tic Tac Toe' }
      />
      <GameBoard
        onTileClick={ handleTileClick }
        state={ m_state }
      />
    </>
  );
}

export default TicTacToe;
