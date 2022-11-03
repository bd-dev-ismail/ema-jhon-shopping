import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

/**
 * total count - loaded
 * perPage (size)- 10;
 * pages- 10/total count
 * currentPage
 * 
 */
const Shop = () => {
  // const {products, count} = useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const pages = Math.ceil(count / size);
    useEffect(()=>{
      const url = `http://localhost:5000/products?page=${page}&size=${size}`;
      console.log(page, size);
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
        setProducts(data.products);
      })
    },[page, size])
    const clearCart = ()=>{
      setCart([]);
      deleteShoppingCart();
    }
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        const ids = Object.keys(storedCart);
        // console.log(ids);
        fetch("http://localhost:5000/productsByIds", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ids),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "ids");
            for(const id in storedCart){
              const addedProduct = data.find(product => product._id === id);
              if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
              }
            }
            setCart(savedCart);
          });
       
    },[products]);
    const handalAddToCart = (selectedProduct) => {
      let  newCart = [];
      const exists = cart.find((product) => product._id === selectedProduct._id);
      if(!exists){
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
      }
      else{
        const rest = cart.filter((product) => product._id !== selectedProduct._id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
      }
      
      setCart(newCart);
      addToDb(selectedProduct._id);
    };
    return (
      <div className="shop-container">
        <div className="products-cotnainer">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handalAddToCart={handalAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} clearCart={clearCart}>
            <Link to="/orders">
              <button className="review-btn">
                Review Order
                <i
                  style={{ marginLeft: "10px" }}
                  className="fa-solid fa-arrow-right-long"
                ></i>
              </button>
            </Link>
          </Cart>
        </div>
        <div className="pagination">
          <p>
            Currently Selected page {page} & size {size}
          </p>
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={page === number ? "selected" : undefined}
            >
              {number + 1}
            </button>
          ))}
          <select onClick={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    );
};

export default Shop;