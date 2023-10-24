import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react';
import PropTypes from 'prop-types';
import Button from '../Button';

const ShopCart = (props) => {
  const { visible, setVisible } = props;

  return (
    <COffcanvas
      placement="end"
      visible={visible}
      onHide={() => setVisible(false)}
    >
      <COffcanvasHeader>
        <COffcanvasTitle className="Cart-title">MY CART</COffcanvasTitle>
        <CCloseButton
          className="text-reset"
          onClick={() => setVisible(false)}
        />
      </COffcanvasHeader>
      <COffcanvasBody>
        {/* <div className="Cart">
          <div className="Cart-products"></div>
          <div className="Cart-total">
            <span className="Cart-text"></span>
            <span className="Cart-price"></span>
          </div> */}
        {/* <Button>Checkout</Button> */}
        {/* </div> */}
        Content for the offcanvas goes here. You can place just about any React
        component or custom elements here.
      </COffcanvasBody>
    </COffcanvas>
  );
};

ShopCart.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default ShopCart;
