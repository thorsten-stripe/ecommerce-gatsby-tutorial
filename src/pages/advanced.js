import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Advanced Example" />
    <h1>Hi from the advanced example</h1>
    <Link to="/">Go back to the easy example</Link>
  </Layout>
)

export default AdvancedExamplePage
