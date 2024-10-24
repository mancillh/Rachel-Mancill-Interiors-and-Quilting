import '../styles/Section.css';
import PropTypes from 'prop-types';

function Section(props) {
    return (
        <>
            <section>
                <h2>{props.sectionTitle}</h2>
                <p>{props.sectionContent}</p>
            </section>
            <hr />
        </>
    );
}

Section.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    sectionContent: PropTypes.string
  }

export default Section;