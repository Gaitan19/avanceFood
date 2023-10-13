import PropTypes from 'prop-types';

const CarouselComponent = (props) => {
  const { children, slides, className } = props;

  return <div>CarouselComponent</div>;
};

CarouselComponent.propTypes = {
  children: PropTypes.node,
  slides: PropTypes.node,
  className: PropTypes.string,
};

CarouselComponent.defaultProps = {
  children: <></>,
  slides: <></>,
  className: '',
};

export default CarouselComponent;
