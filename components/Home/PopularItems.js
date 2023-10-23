import { useState } from 'react';
import Button from '../Button';
import Product from './Product';
import { productList } from '@/constants/ProductList';

const PopularItems = () => {
  const [active, setActive] = useState('');
  const [products, setProducts] = useState(productList);

  const filterProducts = async (category) => {
    setProducts(productList);
    setActive(category);

    if (category !== '') {
      setProducts(() => {
        const filteredProducts = productList.filter((product) => {
          return category === '' || product.category === category;
        });
        return filteredProducts;
      });
    }
  };

  const renderProducts = () =>
    products.map((product) => <Product product={product} key={product.id} />);

  return (
    <div className="Products">
      <div className="Products-content">
        <h3 className="Products-title">Our Featured Items</h3>
        <h2 className="Products-text">Our most popular items</h2>
        <div className="Products-filters">
          <Button
            customClass={`button products ${
              active === '' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('')}
          >
            All Categories
          </Button>
          <Button
            customClass={`button products ${
              active === 'Noodles' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('Noodles')}
          >
            Noodles
          </Button>
          <Button
            customClass={`button products ${
              active === 'Burger' ? 'filterActive' : ''
            } `}
            onClick={() => filterProducts('Burger')}
          >
            Burger
          </Button>
          <Button
            customClass={`button products ${
              active === 'Chicken' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('Chicken')}
          >
            Chicken
          </Button>
          <Button
            customClass={`button products ${
              active === 'Ice cream' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('Ice cream')}
          >
            Ice Cream
          </Button>
          <Button
            customClass={`button products ${
              active === 'Drinks' ? 'filterActive' : ''
            }`}
            onClick={() => filterProducts('Drinks')}
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
