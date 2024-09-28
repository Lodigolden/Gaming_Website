import styles from './Title.module.css'

import PropTypes from 'prop-types'

///////////////////////////////////////////////////////////////////////////////
/**
 * * A Title component for the game site.
 * 
 * @param title The title of the website
 * 
 * TODO: This component is not done yet. 
 */
///////////////////////////////////////////////////////////////////////////////
function Title(props) {
  return(
    <div className={ styles.title }>
      <h1 className={ styles.text }>{ props.title }</h1>
    </div>
  ); 
};

///////////////////////////////////////////////////////////////////////////////
// * Prop data types.
///////////////////////////////////////////////////////////////////////////////
Title.propTypes = {
  title: PropTypes.string,
};

///////////////////////////////////////////////////////////////////////////////
// * Default prop values.
///////////////////////////////////////////////////////////////////////////////
Title.defaultProps = {
  title: "Gaming Site",
};

export default Title