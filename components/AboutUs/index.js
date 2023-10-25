import Banner from '../Banner';
import Layout from '../Layout';
import Best from './Best';
import ServicesOffer from './ServicesOffer';

const AboutUs = () => {
  return (
    <Layout headPageTitle="About us">
      <Banner title="About Us" page="About Us" />
      <Best />
      <ServicesOffer />
    </Layout>
  );
};

export default AboutUs;
