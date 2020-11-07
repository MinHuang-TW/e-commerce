import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HjRRMCCxUVImKrnLLDS2CxMsd1RWrSWfj7DI9NOK02Lqx50SQcsRTvBe8R8hI0uyGNStedcqxsbtfmyO1BunwnC005MTx9llP';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => alert('Payment successful'))
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment.');
      });
  };

  return (
    <StripeCheckout
      name='Nature Rover'
      image='https://sendeyo.com/up/d/f3eb2117da'
      billingAddress
      shippingAddress
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      label='Pay Now'
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
