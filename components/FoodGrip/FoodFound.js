import { foodPopularItems, foodReservation } from '@/constants/food';
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
            <FilterStars
              title="Reservation"
              isByType
              filterTypes={foodReservation}
            />
            <FilterStars
              title="Popular Items"
              isByType
              filterTypes={foodPopularItems}
            />
          </div>
          <div className="Food-container-right">right</div>
        </div>
      </div>
    </div>
  );
};

export default FoodFound;
