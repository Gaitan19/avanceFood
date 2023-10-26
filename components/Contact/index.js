import Banner from '../Banner';
import Layout from '../Layout';
import ContactUs from './ContactUs';

const Contact = () => {
  return (
    <Layout headPageTitle="Contact">
      <Banner title="Contact" page="Contact" />
      <ContactUs></ContactUs>
    </Layout>
  );
};

export default Contact;
