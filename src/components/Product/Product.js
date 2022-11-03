import React from 'react';
import './Product.css';
const Product = ({ product, handalAddToCart }) => {
  const { name, img, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="..." />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>Manufature by {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button onClick={() => handalAddToCart(product)} className="btn-cart">
        Add To Cart
      <i style={{margin: '0 10px'}} className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default Product;