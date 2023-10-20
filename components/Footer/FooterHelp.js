import Link from 'next/link';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { v4 } from 'uuid';
import routes from '@/constants/routes';
import FooterList from './FooterList';

const FooterHelp = () => {
  const socialIcons = [
    <FaFacebookSquare className="Footer-icon" />,
    <FaTwitterSquare className="Footer-icon" />,
    <FaInstagramSquare className="Footer-icon" />,
    <FaLinkedin className="Footer-icon" />,
  ];

  const renderSocialIcons = () => {
    return socialIcons.map((socialIcon) => {
      return (
        <li className="Footer-icons" key={v4()}>
          <Link href={routes.home}>{socialIcon}</Link>
        </li>
      );
    });
  };

  return (
    <FooterList customClass="help" title="Need any help?">
      <div className="Footer-help-info">
        <div className="Footer-help-item">
          <p className="Footer-help-text">Call 24/7 for any help</p>
          <p className="Footer-help-green">+00 123 456 789</p>
        </div>
        <div className="Footer-help-item">
          <p className="Footer-help-text">Mail to our support team</p>
          <p className="Footer-help-green">support@domain.com</p>
        </div>
        <div className="Footer-help-item">
          <p className="Footer-help-text">Follow us on</p>
          <ul className="Footer-social">{renderSocialIcons()}</ul>
        </div>
      </div>
    </FooterList>
  );
};

export default FooterHelp;
