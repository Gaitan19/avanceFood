import { v4 } from 'uuid';
import Banner from '@/components/Banner';
import TextButton from '@/components/Home/TextButton';
import Layout from '@/components/Layout';
import TestimonialCard from '@/components/Testimonials/TestimonialCard';
import { testimonialList } from '@/constants/testimonialList';

export default function testimonialsPage() {
  const renderTestimonials = () =>
    testimonialList.map(
      (person, index) =>
        index < 3 && <TestimonialCard person={person} key={v4()} />,
    );

  return (
    <Layout headPageTitle="Testimonials-Foodingly">
      <Banner title="Testimonials" page="Testimonials" />
      <TextButton
        customClass="Reservation"
        text="What our client say about us"
        title="Testimonials"
      >
        <div className="Review-container">{renderTestimonials()}</div>
        <div className="Review-container">{renderTestimonials()}</div>
      </TextButton>
    </Layout>
  );
}
