import { offers } from '@/constants/offers';
import MultiCarousel from '../MultiCarousel';
import ReservationCard from './ReservationCard';

const Reservation = () => {
  const renderOffers = () =>
    offers.map((offer) => {
      return <ReservationCard key={offer.id} offer={offer} />;
    });

  return (
    <div className="Reservation">
      <div className="Reservation-content">
        <h3 className="Reservation-title">
          <span>Our Reservation</span>
        </h3>
        <h2 className="Reservation-text">
          <span>What we offer</span>
        </h2>
      </div>
      <MultiCarousel customClass="Reservation-carousel">
        {renderOffers()}
      </MultiCarousel>
      {/* <div className="Container"></div> */}
    </div>
  );
};

export default Reservation;
