import React from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  clearItemFromCart,
} from '../../redux/cart/cart-actions';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='sign' onClick={() => removeItem(cartItem)}>
          &#x2212;
        </div>
        <div className='value'>{quantity}</div>
        <div className='sign' onClick={() => addItem(cartItem)}>
          &#x002B;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
