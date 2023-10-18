import Proptypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { v4 } from 'uuid';

const TestimonialCard = (props) => {
  const { person } = props;
  const { image, name, date, text } = person;

  const renderStar = () => {
    return [0, 1, 2, 3, 4].map(() => {
      return (
        <li key={v4()} className="Testimonials-cardIcon">
          <FaStar />
        </li>
      );
    });
  };

  return (
    <article className="Testimonials-card">
      <div className="Testimonials-cardHeader">
        <p className="Testimonials-cardDate">{date}</p>
        <div className="Testimonials-cardRating">
          <p className="Testimonials-cardRatingText">Excellent</p>
          <ul className="Testimonials-cardStars">{renderStar()}</ul>
        </div>
      </div>
      <div className="Testimonials-cardBody">
        <div
          className="Testimonials-cardImage"
          style={{ backgroundImage: `url(${image})` }}
        />
        <h3 className="Testimonials-cardName">
          <span>{name}</span>
        </h3>
        <p className="Testimonials-cardText">“{text}”</p>
      </div>
    </article>
  );
};

TestimonialCard.propTypes = {
  person: Proptypes.shape({
    image: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    date: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired,
  }).isRequired,
};

export default TestimonialCard;
