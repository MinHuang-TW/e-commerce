import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
} from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt={name} />
    <CartItemDetails>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </CartItemDetails>
  </CartItemContainer>
);

export default React.memo(CartItem);
