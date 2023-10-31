import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { v4 } from 'uuid';
import FoodLeftItem from './FoodLeftItem';

const FilterStars = (props) => {
  const { title } = props;

  const renderStar = (marks) => {
    return [...Array(5).keys()].map((index) => {
      const isGreen = index >= marks;

      return (
        <li key={v4()}>
          <FaStar className={`Food-start ${isGreen && 'Food-start-green'}`} />
        </li>
      );
    });
  };

  const renderReviews = () =>
    [...Array(5).keys()].map((index) => (
      <div className="Food-container-starts" key={v4()}>
        <input type="checkbox" className="Food-checkbox" />
        <ul className="Food-starts">{renderStar(index)}</ul>
      </div>
    ));
  return <FoodLeftItem title={title}>{renderReviews()}</FoodLeftItem>;
};

FilterStars.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FilterStars;
