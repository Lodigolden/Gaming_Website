import GameBoard from './Components/GameBoard/GameBoard.jsx'
import BackButton from '../SiteOverview/Components/BackButton/BackButton.jsx'

///////////////////////////////////////////////////////////////////////////////
/**
 * * The Tic Tac Toe component.
 * 
 * ! This component is not finished yet. 
 */
///////////////////////////////////////////////////////////////////////////////
function TicTacToe() {
  let value = 'O'

  return(
    <>
      <BackButton />
      <GameBoard />
    </>
  );
}

export default TicTacToe;