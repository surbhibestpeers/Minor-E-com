import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const Payment = () => {
  return (
    <div className="main_add">
    <div className="head_add">
      <h4>Payment</h4> 
    </div>
    <div>
      <StripeCheckout 
      stripeKey='pk_test_51MCKgPSG9K2b6lDfYkwL24j9uKsvJgKeo6bPgkpI3HOrWxJqr7hFEtmDu67x8PXOxQJ562Wus8LayEYHTjMZsTKw00OIMlqtpP'
      amount="50000"
      name="surbi"
      currency='inr'
      />
    </div>
    </div>
  )
}

export default Payment
