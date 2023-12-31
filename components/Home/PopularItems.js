import { useState, useContext } from 'react';
import { v4 } from 'uuid';
import Button from '../Button';
import Product from './Product';
import { productList, productOptions } from '@/constants/ProductList';
import { foodinglyContext } from '../FoodinglyContext';

const PopularItems = () => {
  const [active, setActive] = useState('');
  const [products, setProducts] = useState(productList);

  const { productsCart } = useContext(foodinglyContext);

  const filterProducts = async (category) => {
    setProducts(productList);
    setActive(category);

    if (category !== 'All Categories') {
      setProducts(() => {
        const filteredProducts = productList.filter((product) => {
          return product.category === category;
        });
        return filteredProducts;
      });
    }
  };

  const renderProductOptions = () =>
    productOptions.map((productOption) => (
      <Button
        key={v4()}
        customClass={`Button-products ${
          active === productOption ? 'Button-products-active' : ''
        }`}
        onClick={() => filterProducts(productOption)}
        buttonText={productOption}
      />
    ));

  const renderProducts = () => {
    return products.map((product) => {
      const isCartproduct =
        productsCart.some((productCart) => productCart.id === product.id) ||
        false;

      return (
        <Product
          product={product}
          key={product.id}
          isCartProduct={isCartproduct}
        />
      );
    });
  };

  return (
    <div className="Products">
      <div className="Products-content">
        <h3 className="Products-title">Our Featured Items</h3>
        <h2 className="Products-text">Our most popular items</h2>
        <div className="Products-filters">{renderProductOptions()}</div>
        <div className="Products-list">{renderProducts()}</div>
      </div>
    </div>
  );
};

export default PopularItems;
