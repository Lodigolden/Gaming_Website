import { useNavigate } from 'react-router-dom'

import BackButton from '../SiteOverview/Components/BackButton/BackButton.jsx'

///////////////////////////////////////////////////////////////////////////////
/**
 * * The Checkers component.
 * 
 * ! This component is not finished yet. 
 */
///////////////////////////////////////////////////////////////////////////////
function Checkers() {
  const navigate = useNavigate(); 

  return(
    <>
      <BackButton />
    </>
  );
}

export default Checkers; 