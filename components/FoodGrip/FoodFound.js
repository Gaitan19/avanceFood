import FilterPrice from './FilterPrice';
import FilterStars from './FilterStars';

const FoodFound = () => {
  return (
    <div className="Food">
      <div className="Food-content">
        <h2 className="Food-title">Foods found</h2>
        <div className="Food-container">
          <div className="Food-container-left">
            <FilterPrice />
            <FilterStars title="Filter by Review" />
          </div>
          <div className="Food-container-right">right</div>
        </div>
      </div>
    </div>
  );
};

export default FoodFound;
