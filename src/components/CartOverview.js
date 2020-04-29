import React from 'react'

import { useShoppingCart } from 'use-shopping-cart'

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const Cart = () => {
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
  } = useShoppingCart()

  return (
    <div>
      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {totalPrice()}</p>

      {/* Redirects the user to Stripe */}
      <button style={buttonStyles} onClick={() => redirectToCheckout()}>
        Checkout
      </button>
      <button style={buttonStyles} onClick={clearCart}>
        Clear cart
      </button>
    </div>
  )
}

export default Cart
