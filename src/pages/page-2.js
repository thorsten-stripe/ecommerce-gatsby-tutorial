import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class SecondPage extends Component {
  componentDidMount() {
    // Empty localStorage after successful payment.
    localStorage.removeItem('stripe_checkout_items')
  }

  render() {
    return (
      <Layout>
        <SEO title="Payment Success" />
        <h1>Sucess!</h1>
        <Link to="/">Shop again</Link>
      </Layout>
    )
  }
}

export default SecondPage
