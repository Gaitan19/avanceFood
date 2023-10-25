import Banner from '../Banner';
import Layout from '../Layout';
import Best from './Best';

const AboutUs = () => {
  return (
    <Layout headPageTitle="About us">
      <Banner title="About Us" page="About Us" />
      <Best />
    </Layout>
  );
};

export default AboutUs;
