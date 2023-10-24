import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const foodinglyContext = createContext();

const FoodinglyContext = (props) => {
  const { children } = props;
  const [visibleCart, setVisibleCart] = useState(false);

  return (
    <foodinglyContext.Provider value={{ visibleCart, setVisibleCart }}>
      {children}
    </foodinglyContext.Provider>
  );
};

FoodinglyContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FoodinglyContext, foodinglyContext };
