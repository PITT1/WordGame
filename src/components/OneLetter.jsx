import { useEffect, useState } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const OneLetter = ({ letter }) => {
    const [putLetter, setPutLetter] = useState("");

    useEffect(() => {
        setPutLetter(letter);
    },[letter]);
    return(
        <div className='wordContainer'>
            {putLetter}
        </div>
    )
}

OneLetter.propTypes = {
    letter: PropTypes.string
}
export default OneLetter;

