import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
          .then((res) => res.json())
          .then((data) => setProducts(data));
    },[])
    return (
        <div className='shop-container'>
            <div className="products-cotnainer">
                {
                    products.map(product =>
                         <Product product={product}
                          key={product.id}
                          />)
                }
            </div>
            <div className="cart-container">
                <h3>This is for cart option</h3>
            </div>
        </div>
    );
};

export default Shop;