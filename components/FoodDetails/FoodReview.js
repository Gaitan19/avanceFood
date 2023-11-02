import { v4 } from 'uuid';
import { testimonialList } from '@/constants/testimonialList';
import TestimonialCard from '../Testimonials/TestimonialCard';
import { responsiveCarouselTestimonials } from '@/constants/responsiveCarousel';

const FoodReview = () => {
  const renderTestimonials = () =>
    testimonialList.map(
      (person, index) =>
        index < 3 && <TestimonialCard person={person} key={v4()} />,
    );

  return (
    <div className="Food-details Review">
      <div className="Food-details-content Review-content">
        <h3 className="Food-details-item-title">All review</h3>

        <div className="Review-container" customClass="Testimonials-carousel">
          {renderTestimonials()}
        </div>
      </div>
    </div>
  );
};

export default FoodReview;
