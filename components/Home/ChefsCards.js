import PropTypes from 'prop-types';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { v4 } from 'uuid';
import Link from 'next/link';
import routes from '@/constants/routes';

const ChefsCards = (props) => {
  const { chefInformation } = props;

  const { image, name, title } = chefInformation;

  const socialIcons = [
    <FaFacebookF className="Chefs-icon" />,
    <FaTwitter className="Chefs-icon" />,
    <FaInstagram className="Chefs-icon" />,
    <FaLinkedinIn className="Chefs-icon" />,
  ];

  const renderIconList = () => {
    return socialIcons.map((socialIcon) => {
      return (
        <li key={v4()}>
          <Link href={routes.home} className="Chefs-link">
            {socialIcon}
          </Link>
        </li>
      );
    });
  };

  return (
    <article className="Chefs-card">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="Chefs-image"
      />
      <div className="Chefs-info">
        <ul className="Chefs-socialList">
          {/* <li className="Chefs-link">
            <a href="" className="Chefs-icon">
              <Icon className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li className="Chefs-link">
            <a href="" className="Chefs-icon">
              <Icon className="fa-brands fa-twitter" />
            </a>
          </li>
          <li className="Chefs-link">
            <a href="" className="Chefs-icon">
              <Icon className="fa-brands fa-instagram" />
            </a>
          </li>
          <li className="Chefs-link">
            <a href="" className="Chefs-icon">
              <Icon className="fa-brands fa-linkedin-in" />
            </a>
          </li> */}
          {renderIconList()}
        </ul>
        <h3 className="Chefs-name">{name}</h3>
        <p className="Chefs-profession">{title}</p>
      </div>
    </article>
  );
};

ChefsCards.propTypes = {
  chefInformation: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChefsCards;
