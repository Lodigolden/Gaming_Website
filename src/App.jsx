import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SiteOverview from './SiteOverview/SiteOverview.jsx'
import Checkers from './Checkers/Checkers.jsx'

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
      <BrowserRouter>
        <Routes>
          <Route 
            index path='/'
            element={ <SiteOverview /> }
          />
          <Route 
            checkers path='/checkers'
            element={ <Checkers /> }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
