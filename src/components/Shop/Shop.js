import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
  const products = useLoaderData();
    const [cart, setCart] = useState([]);
 
    useEffect(()=>{
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
    },[products]);
    const handalAddToCart = (selectedProduct) => {
      let  newCart = [];
      const exists = cart.find((product) => product.id === selectedProduct.id);
      if(!exists){
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
      }
      else{
        const rest = cart.filter((product) => product.id !== selectedProduct.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
      }
      
      setCart(newCart);
      addToDb(selectedProduct.id);
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