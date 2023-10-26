import PropTypes from 'prop-types';

const ContactCard = (props) => {
  const { office } = props;
  const { title, city, text } = office;
  return (
    <article className="Contact-card">
      <p className="Contact-card-title">{title}</p>
      <h3 className="Contact-card-city">
        <span>{city}</span>
      </h3>
      <p className="Contact-card-text">{text}</p>
      <p className="Contact-card-view">View on map</p>
    </article>
  );
};

ContactCard.propTypes = {
  office: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactCard;