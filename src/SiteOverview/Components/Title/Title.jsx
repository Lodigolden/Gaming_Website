import PropTypes from 'prop-types'

import styles from './Title.module.css'

///////////////////////////////////////////////////////////////////////////////
/**
 * * A Title component for the game site.
 * 
 * @param title The title of the website
 * 
 * TODO: This component is not done yet. 
 */
///////////////////////////////////////////////////////////////////////////////
function Title({ title='Gaming Site' }) {
  return(
    <div className={ styles.title }>
      <h1 className={ styles.text }>{ title }</h1>
    </div>
  ); 
};

///////////////////////////////////////////////////////////////////////////////
// * Prop data types.
///////////////////////////////////////////////////////////////////////////////
Title.propTypes = {
  title: PropTypes.string,
};

export default Title