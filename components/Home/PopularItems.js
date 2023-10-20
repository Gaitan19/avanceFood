import React, { useState } from 'react';
import Button from '../Button';
import Product from './Product';
import { productList } from '@/constants/ProductList';

const PopularItems = () => {
  const [active, setActive] = useState('');

  const filterProducts = async (category) => {
    setActive(category);
  };

  const renderProducts = () =>
    productList.map((product) => (
      <Product product={product} key={product.id} />
    ));

  return (
    <div className="Products">
      <div className="Products-content">
        <h3 className="Products-title">Our Featured Items</h3>
        <h2 className="Products-text">Our most popular items</h2>
        <div className="Products-filters">
          <Button
            className={`button products ${active === '' ? 'filterActive' : ''}`}
            onClick={() => filterProducts('')}
          >
            All Categories
          </Button>
          <Button
            className={`button products ${
              active === 'NOODLES' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('NOODLES')}
          >
            Noodles
          </Button>
          <Button
            className={`button products ${
              active === 'BURGUER' ? 'filterActive' : ''
            } `}
            onClick={() => filterProducts('BURGER')}
          >
            Burger
          </Button>
          <Button
            className={`button products ${
              active === 'CHICKEN' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('CHICKEN')}
          >
            Chicken
          </Button>
          <Button
            className={`button products ${
              active === 'ICE_CREAM' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('ICE_CREAM')}
          >
            Ice Cream
          </Button>
          <Button
            className={`button products ${
              active === 'DRINKS' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('DRINKS')}
          >
            Drinks
          </Button>
        </div>
        <div className="Products-list">{renderProducts()}</div>
      </div>
    </div>
  );
};

export default PopularItems;
