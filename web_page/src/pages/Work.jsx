import React from 'react'
import Product from '../components/Product'
import {products} from '../data/index'

function Work() {
  return (
    <>
    <div>Work</div>
      <Product product={products [0]}/>
      <Product product={products[1]}/>
      <Product product={products[2]}/>
    </>
  )
}

export default Work;