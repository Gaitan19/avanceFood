import { useContext } from 'react';
import Banner from '../Banner';
import Layout from '../Layout';
import CartViewItem from './CartViewItem';
import TableView from './TableView';
import { foodinglyContext } from '@/context/FoodinglyContext';

const CartView = () => {
  const { getTotalPrice } = useContext(foodinglyContext);

  return (
    <Layout headPageTitle="Cart view">
      <Banner title="Cart view" page="Cart view" />

      <div className="Food">
        <div className="Food-content View-content">
          <TableView />
          <div className="Food-container View-container">
            {/* <div className="View-container-item">
              <div className="View-item">
                <h3 className="Food-details-title">Coupon code</h3>
              </div>
            </div> */}
            <CartViewItem title="Coupon code" buttonText="Apply voucher">
              <input
                className="Order-inputs View-input"
                placeholder="Enter coupon code"
              />
            </CartViewItem>
            {/* <div className="View-container-item">
              <div className="View-item">
                <h3 className="Food-details-title">Cart Total</h3>
              </div>
            </div> */}
            <CartViewItem title="Cart Total" buttonText="Proceed to Checkout">
              <div className="View-total">
                <div className="View-subtotal">
                  <span>Subtotal</span>
                  <span>${getTotalPrice()}</span>
                </div>
                <div className="View-amount">
                  <span>Total amount</span>
                  <span>${getTotalPrice()}</span>
                </div>
              </div>
            </CartViewItem>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartView;
