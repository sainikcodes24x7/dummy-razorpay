Here we are using order API 

For every payment, an order is created using the order API which is a server to serve call secured by basic authentication using our API keys

We are passing the received orderId (received via OrderAPI) response to the checkout

This basically connects order to payment and hence prevents any sort of tampering.

The paymentid, orderid, signaturefields appear in the checkout response and it must be stored in server.
1)razorpay_payment_id-Unique identifier for the payment returned by Checkout only for successful payments.
2)razorpay_order_id-Unique identifier for the order returned by Checkout.
3)razorpay_signature- Signature returned by the Checkout. This is used to verify the payment.


VERIFICATION OF SIGNATURE  (MANDATORY):-
[LEFT TO BE DONE FOR ORIGINAL ONE]
To verify the razorpay_signature returned to you by the checkout:

Create a signature in your server using the following attributes:

order_id - Retrieve the order_id from your server. Do not use the razorpay_order_id returned by checkout.
razorpay_payment_id - Returned by checkout.
key_secret - Available in your server.
The key_secret that was generated from the Razorpay Dashboard.
Use the SHA256 algorithm, the razorpay_payment_id and the order_id to construct a HMAC hex digest

When payment is successful, sign verification will be initiated...
#THANKS TO RAZORPAY OFFICIAL DOCS
