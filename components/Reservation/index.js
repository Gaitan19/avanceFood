const Reservation = () => {
  const renderOffers = () =>
    offers.map((offer) => <ReservationCard key={offer.id} offer={offer} />);

  return (
    <div className="Reservation">
      <div className="Reservation-content">
        <h3 className="Reservation-title">
          <span>Our Reservation</span>
        </h3>
        <h2 className="Reservation-text">
          <span>What we offer</span>
        </h2>

        <Carousel slides={4} className="Reservation-carousel">
          {renderOffers()}
        </Carousel>
      </div>
    </div>
  );
};

export default Reservation;
