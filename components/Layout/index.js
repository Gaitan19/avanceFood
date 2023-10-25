import PropTypes from 'prop-types';
import { useContext } from 'react';
import Header from '../Header';
import HeadPage from '../HeadPage';
import Footer from '../Footer';
import ShopCart from '../ShopCart.js';
import { foodinglyContext } from '../FoodinglyContext';

const Layout = (props) => {
  const { children, headPageTitle } = props;
  const { visibleCart, setVisibleCart } = useContext(foodinglyContext);

  return (
    <>
      <HeadPage title={headPageTitle} description="Foodingly" />
      <section>
        <Header />
        {children}
        <ShopCart visible={visibleCart} setVisible={setVisibleCart} />
        <Footer />
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  headPageTitle: PropTypes.string,
};

Layout.defaultProps = {
  children: <></>,
  headPageTitle: 'Home',
};

export default Layout;
