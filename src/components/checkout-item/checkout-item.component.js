import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';

import {clearItemFromCart} from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, clearItem}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={cartItem.imageUrl}/>
        </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">{cartItem.quantity}</span>
            <span className="price">{cartItem.price}</span>
            <span onClick={()=> clearItem(cartItem)} className="remove-button">X</span>   
    </div>
            
);

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);