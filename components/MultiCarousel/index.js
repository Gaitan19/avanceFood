import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import { responsiveCarousel } from '@/constants/responsiveCarousel';

const ButtonGroup = ({ goToSlide }) => {
  return (
    <div className="Button-carousel-container">
      <button className="Button-carousel" onClick={() => goToSlide(0)} />
    </div>
  );
};

const MultiCarousel = (props) => {
  const { children, customClass, speed } = props;

  return (
    <div className={customClass}>
      <Carousel
        responsive={responsiveCarousel}
        swipeable
        infinite
        autoPlay
        autoPlaySpeed={speed}
        transitionDuration={600}
        removeArrowOnDeviceType={[
          'tablet',
          'mobile',
          'superLargeDesktop',
          'desktop',
        ]}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
      >
        {children}
      </Carousel>
    </div>
  );
};

MultiCarousel.propTypes = {
  children: PropTypes.node,
  customClass: PropTypes.string,
  speed: PropTypes.number,
};

MultiCarousel.defaultProps = {
  children: <></>,
  customClass: '',
  speed: 6000,
};

export default MultiCarousel;
