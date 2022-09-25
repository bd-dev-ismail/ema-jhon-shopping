import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("products.json")
          .then((res) => res.json())
          .then((data) => setProducts(data));
    },[])
    const handalAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
    };
    return (
      <div className="shop-container">
        <div className="products-cotnainer">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handalAddToCart={handalAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Shop;