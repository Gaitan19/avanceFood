import PropTypes from 'prop-types';
import Header from '../Header';
import HeadPage from '../HeadPage';
import Footer from '../Footer';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <HeadPage title="Home" description="Foodingly" />
      <section>
        <Header />
        {children}
        <Footer />
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
