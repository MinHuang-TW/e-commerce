import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
