import Banner from '../Banner';
import Layout from '../Layout';
import FoodDetailsLeft from './FoodDetailsLeft';
import FoodDetailsRight from './FoodDetailsRight';

const FoodDetails = () => {
  return (
    <Layout headPageTitle="Food details">
      <Banner title="Food details" page="Food details" />
      <div className="Food-details">
        <div className="Food-details-content">
          <div className="Food-details-container">
            <FoodDetailsLeft />
            <FoodDetailsRight />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FoodDetails;
