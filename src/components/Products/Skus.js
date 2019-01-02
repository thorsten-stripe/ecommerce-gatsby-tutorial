import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'

const conatinerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

export default props => (
  <StaticQuery
    query={graphql`
      query SkusForProduct {
        skus: allStripeSku(
          filter: { product: { id: { eq: "prod_EGl7ZnT96XrPf6" } } }
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
          <SkuCard {...props} key={sku.id} sku={sku} />
        ))}
      </div>
    )}
  />
)
