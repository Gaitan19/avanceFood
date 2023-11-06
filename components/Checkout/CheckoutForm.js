import { v4 } from 'uuid';
import Link from 'next/link';
import { useState } from 'react';
import {
  billingsInformation,
  checkoutSelectors,
  paymentMethods,
} from '@/constants/cartView';
import routes from '@/constants/routes';
import Button from '../Button';

const CheckoutForm = () => {
  const renderBillingsInformation = () =>
    billingsInformation.map((billingInformation) => (
      <input
        key={v4()}
        className="Order-inputs Checkout-input"
        placeholder={billingInformation.text}
        name={billingInformation.text}
        required
      />
    ));

  const renderCheckoutOptions = (options) =>
    options.map((option) => (
      <option key={v4()} value={option}>
        {option}
      </option>
    ));

  const renderCheckoutSelectors = () =>
    checkoutSelectors.map((checkoutSelector) => (
      <select key={v4()} className="Order-inputs Checkout-input">
        {renderCheckoutOptions(checkoutSelector)}
      </select>
    ));

  const renderPaymentMethods = () =>
    paymentMethods.map((paymentMethod) => (
      <div key={v4()} className="Checkout-container-methods">
        <input
          className="Checkout-radio"
          id={paymentMethod}
          type="radio"
          name="Payment methods"
          required
        />
        <label className="Checkout-label" for={paymentMethod}>
          {paymentMethod}
        </label>
      </div>
    ));

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('event.target :>> ', event);
      }}
      className="Checkout-container-left"
    >
      <div className="Checkout-item">
        <h2 className="Checkout-title">Billings Information</h2>
        <div className="Checkout-box Checkout-box-inputs">
          {renderBillingsInformation()}
          <input
            className="Order-inputs Checkout-input Checkout-input-street"
            type="text"
            placeholder="Street address"
            required
          />
          <input
            className="Order-inputs Checkout-input"
            type="text"
            placeholder="Aparment, Suite, House (optional)"
          />
          {renderCheckoutSelectors()}

          <input
            className="Order-inputs Checkout-input Checkout-input-notes"
            type="text"
            placeholder="Additional Notes"
            required
          />
        </div>
      </div>

      <div className="Checkout-item">
        <h2 className="Checkout-title">Payment method</h2>
        <div className="Checkout-box Checkout-box-payment">
          {renderPaymentMethods()}
        </div>
      </div>

      <div className="Checkout-container-check">
        <input
          className="Checkout-input-checkbox"
          id="conditions"
          type="checkbox"
          required
        />
        <label for="conditions">
          I read and accept all
          <Link className="Checkout-link" href={routes.termsService}>
            Terms and conditions
          </Link>
        </label>
      </div>

      <Button buttonType="submit" customClass="Button-fill">
        <span className="Button-fill-text">Place Order</span>
      </Button>
    </form>
  );
};

export default CheckoutForm;
