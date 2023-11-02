import { v4 } from 'uuid';
import Banner from '../Banner';
import TextButton from '../Home/TextButton';
import Layout from '../Layout';
import ChefsCard from '../Home/ChefsCard';
import { chefList } from '@/constants/chefsList';

const ChefsExperienced = () => {
  const renderChefs = () =>
    chefList.map((chef) => <ChefsCard chefInformation={chef} key={v4()} />);

  return (
    <Layout headPageTitle="Chefs-Foodingly">
      <Banner title="Chefs" page="Chefs" />
      <TextButton
        customClass="Reservation"
        text="Meet with our experienced chefs members"
      >
        <div className="Chefs">{renderChefs()}</div>
        <div className="Chefs">{renderChefs()}</div>
      </TextButton>
    </Layout>
  );
};

export default ChefsExperienced;
