import Proptypes from 'prop-types';

const ReservationCard = (props) => {
  const { offer } = props;

  const { title, image, text, icon } = offer;

  return (
    <article className="Reservation-card">
      <div
        className="Reservation-cardIcon"
        style={{ backgroundImage: `url(${icon})` }}
      />
      <h3 className="Reservation-cardTitle">{title}</h3>
      <p className="Reservation-cardText">{text}</p>
      <div
        className="Reservation-cardImage"
        style={{ backgroundImage: `url(${image})` }}
      />
    </article>
  );
};

ReservationCard.propTypes = {
  // image: Proptypes.string,
  // name: Proptypes.string,
  // title: Proptypes.string,
  // icon: Proptypes.string,
  offer: Proptypes.object,
};

ReservationCard.defaultProps = {
  // image: '',
  // name: '',
  // title: '',
  // icon: '',
  offer: {},
};

export default ReservationCard;
