import Reservation from '../Reservation';
import Hero from './Hero';
import SpecialOffer from './SpecialOffer';

const Home = () => {
  return (
    <>
      <Hero
        title="The best options of the day in your town"
        text="Best dishes and ingredients"
        secondText=" Aliqua enim amet anim nisi minim amet veniam eu magna tempor
            laboris. Duis veniam officia culpa sunt deserunt nisi"
      />
      <Reservation />
      <SpecialOffer></SpecialOffer>
    </>
  );
};

export default Home;
