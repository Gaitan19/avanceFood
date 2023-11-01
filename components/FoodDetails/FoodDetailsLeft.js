import { FaCircle, FaForward } from 'react-icons/fa';
import { v4 } from 'uuid';
import FoodDetailsForm from './FoodDetailsForm';

const FoodDetailsLeft = () => {
  const descriptionsList = [
    'Buffet breakfast as per the Itinerary',
    'Visit eight villages showcasing Polynesian culture',
    'Complimentary Camel safari, Bonfire,',
  ];

  const renderDescriptionsList = () =>
    descriptionsList.map((description) => (
      <li className="Food-details-description-text" key={v4()}>
        <FaCircle className="Food-details-circle" />
        {description}
      </li>
    ));

  return (
    <div className="Food-details-left">
      <div className="Food-details-item Food-details-heading">
        <div>
          <h2>Full Chicken Grill</h2>
          <span className="Food-details-forward">
            <FaForward />
            Lunch / Food Details
          </span>
        </div>
        <div className="Food-details-excellent">
          <h4>Excellent</h4>
          <span>4.8/5</span>
          <span className="Food-details-excellent-reviews">
            (1214 reviewes)
          </span>
        </div>
      </div>
      <div className="Food-details-item Food-details-description">
        <h3 className="Food-details-item-title">Description</h3>
        <p className="Food-details-description-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
        </p>
        <p className="Food-details-description-text">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod.
        </p>
        <ul>{renderDescriptionsList()}</ul>
      </div>
      <FoodDetailsForm />
    </div>
  );
};

export default FoodDetailsLeft;
