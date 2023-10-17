import PropTypes from 'prop-types';
import Button from '../Button';

const DinnerToday = (props) => {
  const { title, text } = props;

  return (
    <div className="Dinner">
      <div className="Dinner-content">
        <div className="Dinner-info">
          <h2 className="Dinner-title">{title}</h2>
          <p className="Dinner-text">{text}</p>
          <Button type="button" customClass="Button-fill">
            <span className="Button-fill-text">Make Reservation</span>
          </Button>
        </div>
        <div className="Dinner-image"></div>
      </div>
    </div>
  );
};

DinnerToday.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

DinnerToday.defaultProps = {
  text: '',
};

export default DinnerToday;
