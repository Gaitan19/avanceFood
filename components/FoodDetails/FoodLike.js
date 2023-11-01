import { useContext } from 'react';
import { productList } from '@/constants/ProductList';
import { foodinglyContext } from '@/context/FoodinglyContext';
import Product from '../Home/Product';
import { responsiveCarouselTestimonials } from '@/constants/responsiveCarousel';
import MultiCarousel from '../MultiCarousel';

const FoodLike = () => {
  const { productsCart } = useContext(foodinglyContext);

  const renderProducts = () => {
    return productList.map((product) => {
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
    <div className="Food-details Food-like">
      <div className="Food-details-content">
        <h3 className="Food-like-title">You May Also Like</h3>

        <MultiCarousel customClass="Testimonials-carousel">
          {renderProducts()}
        </MultiCarousel>
      </div>
    </div>
  );
};

export default FoodLike;
