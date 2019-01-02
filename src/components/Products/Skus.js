import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
// import Checkout from '../checkout'
// import ProductCard from './ProductCard';

export default props => (
  <StaticQuery
    query={graphql`
      query SkusForProduct {
        skus: allStripeSku(
          filter: { product: { id: { eq: "prod_EGl7ZnT96XrPf6" } } }
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
      <div>
        {/* <Checkout {...props} /> */}
        {skus.edges.map(({ node: sku }) => (
          <p key={sku.id}>{sku.attributes.name}</p>
        ))}
      </div>
    )}
  />
)
