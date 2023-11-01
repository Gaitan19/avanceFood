import { FaForward } from 'react-icons/fa';

const FoodDetailsLeft = () => {
  return (
    <div className="Food-details-left">
      <div className="Food-details-item Food-details-heading">
        <div>
          <h2>Full Chicken Grill</h2>
          <span className="Food-details-forward">
            <FaForward />
            Lunch / Food Details
          </span>
        </div>
        <div className="Food-details-excellent">
          <h4>Excellent</h4>
          <span>4.8/5</span>
          <span className="Food-details-excellent-reviews">
            (1214 reviewes)
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsLeft;
