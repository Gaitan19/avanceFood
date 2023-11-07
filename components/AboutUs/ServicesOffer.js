import { services } from '@/constants/servicesList';
import ServicesCard from './ServicesCard';

const ServicesOffer = () => {
  const renderServices = () =>
    services.map((serviceoffer) => (
      <ServicesCard key={serviceoffer.id} service={serviceoffer} />
    ));

  return (
    <div className="Services">
      <div className="Services-content">{renderServices()}</div>
    </div>
  );
};

export default ServicesOffer;
