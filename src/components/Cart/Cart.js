import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2); //10 / 100;
    // const total = cart.reduce((previous, current)=> previous + current.price, 0)
    return (
      <div className='cart'>
        <h4>Oder Summary</h4>
        <p>Selected Item: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Cost: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h5>Grand Total: {}</h5>
      </div>
    );
};

export default Cart;