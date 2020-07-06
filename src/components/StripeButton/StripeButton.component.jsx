import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 167.57;
    const publishableKey = 'pk_test_51H1FybAwfAo1wnYHlaRN3KCPPq3NoAMcaAckKF6n2ZypxxwZ2M0mGkpMa75HjpI5lQQYQwNDaHuFDHvzud8AtO4d00tb52ubVP';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
            <StripeCheckout 
                label='Pay Now'
                name='DELTON Save Mart Ltd.'
                billingAddress
                shippingAddress
                image='http://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton