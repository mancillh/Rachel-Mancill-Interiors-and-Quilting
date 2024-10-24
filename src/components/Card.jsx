import '../styles/Card.css';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.imgSrc} alt={props.alt}></img>
        </div>
    );
}

Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Card;