import { v4 } from 'uuid';
import { billingsInformation } from '@/constants/cartView';

const CheckoutForm = () => {
  const renderBillingsInformation = () =>
    billingsInformation.map((billingInformation) => (
      <input
        key={v4()}
        className="Order-inputs"
        placeholder={billingInformation.placeholder}
        required={billingInformation.isRequired}
      />
    ));

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="Checkout-container-left"
    >
      <div className="Checkout-item">
        <h2 className="Checkout-title">Billings Information</h2>
        <div className="Checkout-box">
          {renderBillingsInformation()}
          <input className="Order-inputs" type="" placeholder="" required />
          <input
            className="Order-inputs"
            type=""
            placeholder="Aparmet,Suite,House (optional)"
            required
          />
          <input className="Order-inputs" type="" placeholder="" required />
          <input className="Order-inputs" type="" placeholder="" required />
          <input
            className="Order-inputs"
            type="text"
            placeholder="Additional Notes"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
