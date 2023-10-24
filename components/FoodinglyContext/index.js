import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '@/hooks/useLocalStorage';

const foodinglyContext = createContext();

const FoodinglyContext = (props) => {
  const { children } = props;
  const [visibleCart, setVisibleCart] = useState(false);
  const [productsCart, setProductsCart] = useLocalStorage('productsCart', []);

  const addProductCart = (product) => {
    const newCartProduct = { ...product, cantidad: 1 };

    setProductsCart([...productsCart, newCartProduct]);
  };

  return (
    <foodinglyContext.Provider
      value={{ visibleCart, setVisibleCart, productsCart, addProductCart }}
    >
      {children}
    </foodinglyContext.Provider>
  );
};

FoodinglyContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FoodinglyContext, foodinglyContext };
