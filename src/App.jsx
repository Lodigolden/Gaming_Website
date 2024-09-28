import Card from './Site/Card/Card.jsx'
import Title from './Site/Title/Title.jsx'
import checkersImage from './Site/Card/Assets/Checkers_Image.png'

///////////////////////////////////////////////////////////////////////////////
/**
 * * The App component.
 * 
 * ! This component is not finished yet. 
 */
///////////////////////////////////////////////////////////////////////////////
function App() {
  return(
    <>
      <Title />
      <Card title='Checkers' image={ checkersImage }/>
      <Card title='Catan' />
      <Card />
    </>
  );
};

export default App;
