import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({ product, handalReviewItem }) => {
  const { name, price, quantity, img, shipping, _id } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            Price: <span style={{ color: "orange" }}>${price}</span>
          </p>
          <p>
            Quantity: <span style={{ color: "orange" }}>{quantity}</span>
          </p>
          <p>
            Shipping: <span style={{ color: "orange" }}>${shipping}</span>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={()=>handalReviewItem(_id)} className="btn-delete">
            <i className="fa-solid fa-trash-can delete-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;