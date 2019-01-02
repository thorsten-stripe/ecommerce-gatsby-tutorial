import React from 'react'

import Checkout from './advancedCheckout'

const Cart = class extends React.Component {
  state = {
    cart: [],
  }

  componentDidMount() {
    // TODO get from localstorage
  }

  getCart() {
    return this.state.cart
  }

  addToCart(newItem) {
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: ++item.quantity }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }]
    }
    this.setState({ cart: updatedCart })
    setTimeout(() => {
      console.log(this.state.cart)
    }, 200)
    // TODO update localstorage
  }

  render() {
    return (
      <div>
        <Checkout cart={this.state.cart} />
        {React.cloneElement(this.props.children, {
          addToCart: this.addToCart.bind(this),
          cart: this.state.cart,
        })}
      </div>
    )
  }
}

export default Cart
