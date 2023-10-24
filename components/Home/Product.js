import PropTypes from 'prop-types';
import { useContext } from 'react';
import Button from '../Button';
import { foodinglyContext } from '../FoodinglyContext';

const Product = (props) => {
  const { product } = props;

  const { id, name, image, discount, price } = product;

  const { addProductCart } = useContext(foodinglyContext);

  const showDiscount = () => {
    if (discount)
      return <div className="Products-card-discount">{discount}%</div>;

    return <></>;
  };

  const handleAdd = () => {
    addProductCart(product);
  };

  return (
    <article className="Products-card">
      <div className="Products-card-header">
        <div
          className="Products-card-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        {showDiscount()}
      </div>
      <div className="Products-card-body">
        <p className="Products-card-name">{name.toLowerCase()}</p>
        <p className="Products-card-info">
          <span className="Products-card-rating">4.8/5 Excellent</span>
          <span className="Products-card-review">(1214 reviews)</span>
        </p>
      </div>
      <div className="Products-card-add">
        <p className="Products-card-price">${price}</p>
        <Button customClass="Button-fill Button-add" onClick={handleAdd}>
          <span>Add To Cart</span>
        </Button>
      </div>
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
