import PropTypes from 'prop-types';
import { chefList } from '@/constants/chefsList';

const Chefs = () => {
  //   const renderChefs = () =>
  //     chefList.map((chef) => <ChefsCard chef={chef} key={chef.name} />);

  return (
    <div className="Reservation">
      <div className="Reservation-content">
        <h3 className="Reservation-title">Meet Our Chefs</h3>
        <h2 className="Reservation-text">Our Experienced chefs</h2>
        {/* <div className="Chefs">{renderChefs()}</div> */}
        <div className="Chefs"></div>
      </div>
    </div>
  );
};

export default Chefs;
