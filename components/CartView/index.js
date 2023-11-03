import Banner from '../Banner';
import Layout from '../Layout';
import CartViewItem from './CartViewItem';
import TableView from './TableView';

const CartView = () => {
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
            <CartViewItem title="Coupon code">
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
            <CartViewItem title="Cart Total"></CartViewItem>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartView;
