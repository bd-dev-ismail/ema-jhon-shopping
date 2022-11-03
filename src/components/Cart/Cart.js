
import './Cart.css';
const Cart = ({ cart, clearCart, children }) => {
  // console.log('cart',cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2)); //10 / 100;
  const grandTotal = total + shipping + tax;
  // const total = cart.reduce((previous, current)=> previous + current.price, 0)
  return (
    <div className="cart">
      <h4 style={{ fontSize: "2rem" }}>Oder Summary</h4>
      <div className="cart-info">
        <p>Selected Item: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Cost: ${shipping}</p>
        <p>Tax: ${tax}</p>
      </div>
      <h5 style={{ fontSize: "1.2rem" }}>
        Grand Total: ${grandTotal.toFixed(2)}
      </h5>
      <div>
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
          <i style={{ marginLeft: "20px" }} className="fa-solid fa-trash-can"></i>
        </button>
      </div>
      <div>
        {children}
        
      </div>
    </div>
  );
};

export default Cart;