import React from 'react';
import './Product.css';
const Product = ({product}) => {
    console.log(product);
    const { name, img, price, ratings, seller } = product;
    return (
      <div className="product">
        <img src={img} alt="..." />
        <div className='product-info'>
          <p className="product-name">{name}</p>
          <p>Price: ${price}</p>
          <p>Saller: {seller}</p>
          <p>Ratings: {ratings}</p>
        </div>
        <button className='btn-cart'>Add To Cart</button>
      </div>
    );
};

export default Product;