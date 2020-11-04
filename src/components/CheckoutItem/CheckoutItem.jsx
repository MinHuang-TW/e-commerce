import React from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  clearItemFromCart,
} from '../../redux/cart/cart-actions';
import {
  CheckoutContainer,
  ImageContainer,
  TextContainer,
  QantityContainer,
  RemoveButton,
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#x2212;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#x002B;</div>
      </QantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
