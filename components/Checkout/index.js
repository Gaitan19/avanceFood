import React from 'react';
import Layout from '../Layout';
import Banner from '../Banner';
import CheckoutForm from './CheckoutForm';
import CheckoutOrder from './CheckoutOrder';

const Checkout = () => {
  return (
    <Layout headPageTitle="Checkout-foodingly">
      <Banner title="Checkout" page="Checkout" />
      <div className="Food">
        <div className="Food-content">
          <div className="Checkout-container">
            <CheckoutForm />
            <div className="Checkout-container-right">
              <CheckoutOrder
                title="Your Orders"
                customClass="Checkout-box-orders"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
