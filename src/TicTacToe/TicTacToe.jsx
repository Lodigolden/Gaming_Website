import React, { useState } from 'react'

import GameBoard from './Components/GameBoard/GameBoard.jsx'
import BackButton from '../SiteOverview/Components/BackButton/BackButton.jsx'
import Title from '../SiteOverview/Components/Title/Title.jsx'

///////////////////////////////////////////////////////////////////////////////
/**
 * * The Tic Tac Toe component.
 * 
 * ! This component is not finished yet. 
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
  const [m_is_player1, setPlayer1] = useState(true); 

  return(
    <>
      <BackButton />
      <Title 
        title={ 'Tic Tac Toe' }
      />
      <h1></h1>
      <GameBoard 
        setPlayer1={ setPlayer1 }
        player={ m_is_player1 }
      />
    </>
  );
}

export default TicTacToe;