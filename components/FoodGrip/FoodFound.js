import FilterPrice from './FilterPrice';

const FoodFound = () => {
  return (
    <div className="Food">
      <div className="Food-content">
        <h2 className="Food-title">Foods found</h2>
        <div className="Food-container">
          <div className="Food-container-left">
            <FilterPrice />
          </div>
          <div className="Food-container-right">right</div>
        </div>
      </div>
    </div>
  );
};

export default FoodFound;
