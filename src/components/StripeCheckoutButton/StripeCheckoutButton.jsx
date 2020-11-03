import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HjRRMCCxUVImKrnLLDS2CxMsd1RWrSWfj7DI9NOK02Lqx50SQcsRTvBe8R8hI0uyGNStedcqxsbtfmyO1BunwnC005MTx9llP';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
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
