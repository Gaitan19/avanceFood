import PropTypes from 'prop-types';
import Button from '../Button';

const SpecialOffer = (props) => {
  const { title, text } = props;

  return (
    <div className="Special">
      <div className="Special-content">
        <h3 className="Special-title">{title}</h3>
        <h2 className="Special-text">{text}</h2>
        <Button type="button" customClass="Button-fill">
          <span className="Button-fill-text">Buy Now</span>
        </Button>
      </div>
    </div>
  );
};

SpecialOffer.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

SpecialOffer.defaultProps = {
  text: '',
};

export default SpecialOffer;
