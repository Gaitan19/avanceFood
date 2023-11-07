import React from 'react';
import { v4 } from 'uuid';
import TextButton from './TextButton';
import ChefsCard from './ChefsCard';
import { chefs } from '@/constants/chefsList';

const Chefs = () => {
  const renderChefs = () =>
    chefs.map((chef) => <ChefsCard chefInformation={chef} key={v4()} />);

  return (
    <TextButton
      customClass="Reservation"
      text="Our Experienced chefs"
      title="Meet Our Chefs"
    >
      <div className="Chefs">{renderChefs()}</div>
    </TextButton>
  );
};

export default Chefs;
