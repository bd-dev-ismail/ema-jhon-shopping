import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2)); //10 / 100;
    const grandTotal = total + shipping + tax;
    // const total = cart.reduce((previous, current)=> previous + current.price, 0)
    return (
      <div className='cart'>
        <h4>Oder Summary</h4>
        <p>Selected Item: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Cost: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      </div>
    );
};

export default Cart;