import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { chefList } from '@/constants/chefsList';
import ChefsCards from './ChefsCards';

const Chefs = () => {
  const renderChefs = () =>
    chefList.map((chef) => <ChefsCards chefInformation={chef} key={v4()} />);

  return (
    <div className="Reservation">
      <div className="Reservation-content">
        <h3 className="Reservation-title">Meet Our Chefs</h3>
        <h2 className="Reservation-text">Our Experienced chefs</h2>
        <div className="Chefs">{renderChefs()}</div>
      </div>
    </div>
  );
};

export default Chefs;
