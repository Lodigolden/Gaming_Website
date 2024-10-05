import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import styles from './Card.module.css'

///////////////////////////////////////////////////////////////////////////////
/**
 * * A Card component for the game site. 
 * 
 * @param title The title of the card.
 * @param image The image on the card.
 * @param path  The path to the location of the component.
 * 
 * TODO: This component is not done yet. 
 */
///////////////////////////////////////////////////////////////////////////////
function Card({ title='Enter Title', image='', path='/' }) {
  /////////////////////////////////////////////////////////////////////////////
  // * Member variables.
  /////////////////////////////////////////////////////////////////////////////
  const navigate = useNavigate(); 

  /////////////////////////////////////////////////////////////////////////////
  // * Handles when someone clicks on the card.
  /////////////////////////////////////////////////////////////////////////////
  const handleCardClick = () => {
    navigate(path); 
  }

  return(
    <div className={ styles.card } onClick={ handleCardClick }>
      <img 
        className={ styles.cardimage }
        src={ image }
      ></img>
      <h2 className={ styles.title }>{ title }</h2>
    </div>
  );
};

///////////////////////////////////////////////////////////////////////////////
// * Prop data types.
///////////////////////////////////////////////////////////////////////////////
Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  path:  PropTypes.string,
};

export default Card;