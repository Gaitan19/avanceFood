import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../Button';

const FoodDetailsRight = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="Food-details-right">
      <div className="Food-details-item Food-details-standar">
        <h3 className="Food-details-title">Standar Food</h3>
        <div className="Food-details-price">
          <span className="Food-details-title Price">Price</span>
          <div>
            <span className="Total">$55.00</span>
            <span className="Discounted">$45.00</span>
          </div>
        </div>
        <div className="Food-details-quantity">
          <span>Quantity</span>
          <div>
            <Button
              customClass="Food-details-counter"
              buttonText="+"
              onClick={() => setQuantity(quantity + 1)}
            />
            <span className="Counter">{quantity}</span>
            <Button
              customClass="Food-details-counter"
              buttonText="-"
              onClick={() => quantity > 0 && setQuantity(quantity - 1)}
            />
          </div>

          <Button customClass="Button-fill">
            <span className="Button-fill-text Food-details-add">
              <FaShoppingCart className="Shopping" />
              Add To Cart
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsRight;
