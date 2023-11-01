import Banner from '../Banner';
import Layout from '../Layout';
import FoodDetailsLeft from './FoodDetailsLeft';

const FoodDetails = () => {
  return (
    <Layout headPageTitle="Food details">
      <Banner title="Food details" page="Food details" />
      <div className="Food-details">
        <div className="Food-details-content">
          <div className="Food-details-container">
            <FoodDetailsLeft />
            <div className="Food-details-right">right</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FoodDetails;
