import PropTypes from 'prop-types';
import '../App.css';

const Card = ({ letter, letterFromCard }) => {
    const handleclick = () => {
        letterFromCard(letter)
    }
    return(
        <div className="cardletter" onClick={handleclick}>
            {letter}
        </div>
    )
}

Card.propTypes = {
    letter: PropTypes.string.isRequired,
    letterFromCard: PropTypes.func
}

export default Card;