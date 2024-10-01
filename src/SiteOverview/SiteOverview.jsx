import Card from './Components/Card/Card.jsx'
import Title from './Components/Title/Title.jsx'
import checkersImage from './Components/Card/Assets/Checkers_Image.png'

///////////////////////////////////////////////////////////////////////////////
/**
 * * The SiteOverview component.
 * 
 * ! This component is not finished yet. 
 */
///////////////////////////////////////////////////////////////////////////////
function SiteOverview() {
  return(
    <>
      <Title />
      <Card 
        title='Checkers' 
        image={ checkersImage }
        path='checkers'
      />
      <Card title='Tic Tac Toe' />
     </>
  );
}

export default SiteOverview; 