import PropTypes from 'prop-types';
import '../App.css';

const Card = ({ letter }) => {
    return(
        <div className="cardletter">
            {letter}
        </div>
    )
}

Card.propTypes = {
    letter: PropTypes.string.isRequired
}

export default Card;