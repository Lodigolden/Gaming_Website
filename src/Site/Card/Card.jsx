import styles from './Card.module.css'
import PropTypes from 'prop-types'

function Card(props) {
  return(
    <div className={ styles.card }>
      <h2 className={ styles.title }>{ props.title }</h2>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
};

Card.defaultProps = {
  title: "Enter Title"
}; 

export default Card;