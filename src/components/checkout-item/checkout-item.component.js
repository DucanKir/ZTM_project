import React from 'react';
import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={cartItem.imageUrl}/>
        </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">{cartItem.quantity}</span>
            <span className="price">{cartItem.price}</span>
            <span className="remove-button">X</span>   
    </div>
            
);

export default CheckoutItem;