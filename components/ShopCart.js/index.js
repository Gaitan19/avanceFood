import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';
import Button from '../Button';
import { cartProducts } from '@/constants/ProductList';

const ShopCart = (props) => {
  const { visible, setVisible } = props;
  const productsCounter = cartProducts.length;

  const renderCartProducts = () => {
    return cartProducts.map((cartProduct) => {
      return (
        <li className="Cart-product" key={cartProduct.id}>
          <Image
            width={100}
            height={100}
            priority
            alt="cart product"
            src={cartProduct.image}
            className="Cart-image"
          />
          <div className="Cart-product-info">
            <span className="Cart-name">{cartProduct.name}</span>
            <span className="Cart-product-price">{`${cartProduct.cantidad}x$${cartProduct.price}`}</span>
          </div>
          <Button>
            <FaTrashAlt />
          </Button>
        </li>
      );
    });
  };

  return (
    <COffcanvas
      placement="end"
      visible={visible}
      onHide={() => setVisible(false)}
      className="Cart"
    >
      <COffcanvasHeader>
        <COffcanvasTitle className="Cart-title">{`MY CART(${productsCounter})`}</COffcanvasTitle>
        <CCloseButton
          className="text-reset"
          onClick={() => setVisible(false)}
        />
      </COffcanvasHeader>
      <COffcanvasBody>
        <div className="Cart-container">
          <ul className="Cart-products"> {renderCartProducts()}</ul>
          <div className="Cart-total">
            <span className="Cart-total-text"></span>
            <span className="Cart-price"></span>
          </div>
          <Button>Checkout</Button>
        </div>
        {/* Content for the offcanvas goes here. You can place just about any React
        component or custom elements here. */}
      </COffcanvasBody>
    </COffcanvas>
  );
};

ShopCart.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default ShopCart;
