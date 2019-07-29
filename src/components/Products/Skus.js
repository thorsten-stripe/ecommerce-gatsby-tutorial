import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'

const conatinerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

class Skus extends Component {
  state = {
    stripe: null,
  }

  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)
    this.setState({ stripe })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku(
              sort: { fields: [price] }
            ) {
              edges {
                node {
                  id
                  currency
                  price
                  attributes {
                    name
                  }
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <div style={conatinerStyles}>
            {skus.edges.map(({ node: sku }) => (
              <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
            ))}
          </div>
        )}
      />
    )
  }
}

export default Skus
