import React from 'react';
import Button from '../Button/Button';
import './CartDropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      <Button>GO TO CHECKOUT</Button>
    </div>
  </div>
);

export default CartDropdown;
