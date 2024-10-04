import Tile from './Components/Tile/Tile.jsx'
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
      <Tile value='X'/>
    </>
  );
}

export default TicTacToe;