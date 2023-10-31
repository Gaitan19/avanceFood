import Banner from '../Banner';
import Layout from '../Layout';

const FoodDetails = () => {
  return (
    <Layout headPageTitle="Food details">
      <Banner title="Food details" page="Food details" />
      <div className="Food-details">
        <div className="Food-details-content">
          <div className="Food-details-container">
            <div className="Food-details-left"></div>
            <div className="Food-details-right"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FoodDetails;
