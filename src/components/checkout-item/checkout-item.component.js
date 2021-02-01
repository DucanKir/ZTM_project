import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={cartItem.imageUrl}/>
        </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">
                <div classname="arrow" onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{cartItem.quantity}</span>
                <div classname="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{cartItem.price}</span>
            <span onClick={()=> clearItem(cartItem)} className="remove-button">&#10005;</span>   
    </div>
            
);

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);