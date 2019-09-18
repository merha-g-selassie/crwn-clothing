import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  };
  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='CRWN-Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      />
    </div>
  );
};

export default StripeButton;
