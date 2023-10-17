import Button from '../Button';

const SpecialOffer = () => {
  return (
    <div className="Special">
      <div className="Special-content">
        <h3 className="Special-title">Special Offers</h3>
        <h2 className="Special-text">
          Preferred Food, Drinks, Juice 30% Off Friday Only
        </h2>
        <Button type="button" customClass="Button-fill">
          <span className="Button-fill-text">Buy Now</span>
        </Button>
      </div>
    </div>
  );
};

export default SpecialOffer;
