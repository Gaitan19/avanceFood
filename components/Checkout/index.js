import React from 'react';
import Layout from '../Layout';
import Banner from '../Banner';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
  return (
    <Layout headPageTitle="Checkout-foodingly">
      <Banner title="Checkout" page="Checkout" />
      <div className="Food">
        <div className="Food-content">
          <div className="Checkout-container">
            {/* <div className=""></div> */}
            <CheckoutForm />
            <div className="Checkout-container-right"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
