import { testimonialList } from '@/constants/testimonialList';
import TestimonialCard from './TestimonialCard';
import MultiCarousel from '../MultiCarousel';
import { responsiveCarouselTestimonials } from '@/constants/responsiveCarousel';

const Testimonials = () => {
  const renderTestimonials = () =>
    testimonialList.map((person) => (
      <TestimonialCard person={person} key={person.name} />
    ));

  return (
    <div className="Testimonials">
      <div className="Testimonials-content">
        <h2 className="Testimonials-title">Testimonials</h2>
        <p className="Testimonials-text">What Our Client's Say About Us</p>

        <MultiCarousel
          customClass="Testimonials-carousel"
          responsive={responsiveCarouselTestimonials}
        >
          {renderTestimonials()}
        </MultiCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
