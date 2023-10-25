import { v4 } from 'uuid';
import { servicesList } from '@/constants/servicesList';
import ServicesCard from './ServicesCard';

const ServicesOffer = () => {
  const renderServices = () =>
    servicesList.map((serviceoffer) => (
      <ServicesCard key={v4()} service={serviceoffer} />
    ));

  return (
    <div className="Services">
      <div className="Services-content">{renderServices()}</div>
    </div>
  );
};

export default ServicesOffer;
