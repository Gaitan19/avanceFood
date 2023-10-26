import { offices } from '@/constants/offices';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const ContactUs = () => {
  const renderOffice = () =>
    offices.map((office) => <ContactCard key={office.title} office={office} />);

  return (
    <div className="Contact">
      <div className="Contact-content">
        <h2 className="Contact-title">Contact with us</h2>
        <div className="Contact-phone">
          <span className="Contact-text">Stay in touch</span>
          <a className="Contact-text Contact-number" href="tel:+00 123 456 789">
            +00 123 456 789
          </a>
        </div>
        <div className="Contact-cards">{renderOffice()}</div>
        {/* <ContactForm /> */}
      </div>
    </div>
  );
};

export default ContactUs;
