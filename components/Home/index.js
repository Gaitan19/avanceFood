import Reservation from '../Reservation';
import DinnerToday from './DinnerToday';
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
      <SpecialOffer
        title="Special Offers"
        text="Preferred Food, Drinks, Juice 30% Off Friday Only"
      />
      <DinnerToday
        title="Do You Have Any Dinner Plan Today? Reserve Your Tbale"
        text="Ut voluptate cupidatat aute et culpa sit sint occaecat ut dolor
            demon consequat eu in id. Eu ex ea commodo."
      />
    </>
  );
};

export default Home;
