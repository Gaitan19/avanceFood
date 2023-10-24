import PropTypes from 'prop-types';
import { useContext } from 'react';
import Header from '../Header';
import HeadPage from '../HeadPage';
import Footer from '../Footer';
import ShopCart from '../ShopCart.js';
import { foodinglyContext } from '../FoodinglyContext';

const Layout = (props) => {
  const { children } = props;
  const { visibleCart, setVisibleCart } = useContext(foodinglyContext);

  return (
    <>
      <HeadPage title="Home" description="Foodingly" />
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
};

Layout.defaultProps = {
  children: <></>,
};

export default Layout;
