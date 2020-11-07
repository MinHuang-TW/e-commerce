import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';
import styled from 'styled-components';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <CheckoutHeaderBlock>
        <span>Product</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Description</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Qantity</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Price</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Remove</span>
      </CheckoutHeaderBlock>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: $ {total}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test creadit card for payments*
      <br />
      4242 4242 4242 4242
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const CheckoutPageContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: darkred;
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
