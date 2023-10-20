import PropTypes from 'prop-types';
import Button from '../Button';

const Product = (props) => {
  const { product } = props;

  const { id, name, image, discount, price } = product;

  const showDiscount = () => {
    if (discount)
      return <div className="Products-cardDiscount">{discount}%</div>;

    return <></>;
  };

  return (
    <article className="Products-card">
      <div className="Products-cardHeader">
        <div
          className="Products-cardImage"
          style={{ backgroundImage: `url(${image})` }}
        />
        {showDiscount()}
      </div>
      <div className="Products-cardBody">
        <p className="Products-cardName">{name.toLowerCase()}</p>
        <p className="Products-cardInfo">
          <span className="Products-cardRating">4.8/5 Excellent</span>
          <span className="Products-cardReview">(1214 reviews)</span>
        </p>
      </div>
      <div className="Products-cardAdd">
        <p className="Products-cardPrice">${price}</p>
        <div className="Products-cardButton">
          <Button className="button outline">Add To Cart</Button>
        </div>
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
