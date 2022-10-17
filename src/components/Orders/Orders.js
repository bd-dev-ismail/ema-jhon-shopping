import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart } = useLoaderData();  //{products, initialCart};
    const [cart, setCart] = useState(initialCart);
    const handalReviewItem = (id)=>{
        const remaning = cart.filter(product => product.id !== id);
        setCart(remaning);
        removeFromDb(id);
    }
     const clearCart = () => {
       setCart([]);
       deleteShoppingCart();
     };
    // console.log(cart);
    return (
      <div className="shop-container">
        <div className="orders-cotnainer">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handalReviewItem={handalReviewItem}
            ></ReviewItem>
          ))}
          {cart.length === 0 && (
            <h2 style={{ alignItem: "center" }}>
              No Item added in Cart! Please <Link to="/">Shop More</Link>
            </h2>
          )}
        </div>
        <div className="cart-container">
          <Cart cart={cart} clearCart={clearCart}>
            <Link to="/shipping">
              <button className="review-btn">
                Proceed to Shipping 
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa-solid fa-arrow-right-long"
                ></i>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Orders;