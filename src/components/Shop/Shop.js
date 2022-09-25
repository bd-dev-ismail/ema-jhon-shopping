import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
      console.log('product load before fetch');
        fetch("products.json")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data)
            console.log('products loaded');
          });
    },[]);
    useEffect(()=>{
      console.log('local storage frist line', products);
      const storedCart = getStoredCart();
      const savedCart = [];
      for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
        }
      }
      setCart(savedCart);
      // console.log('local storae finished');
    },[products]);

    const handalAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id);
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