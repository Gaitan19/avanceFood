import PropTypes from 'prop-types';
import Button from '../Button';

const Product = (props) => {
  const { product } = props;

  const { id, name, image, discount, price } = product;

  const showDiscount = () => {
    if (discount)
      return <div className="Products-card-discount">{discount}%</div>;

    return <></>;
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
        {/* <div className="Products-cardButton"> */}
        <Button customClass="Button-fill Button-add">
          <span>Add To Cart</span>
        </Button>
        {/* </div> */}
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