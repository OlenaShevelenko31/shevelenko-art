import React from 'react'
import {product} from '../data/index'
import Product from '../components/Product'


function Work() {
  return (
    <div className='workBox'>
      <Product item={product [0]}/>
      <Product item={product [1]}/>
      <Product item={product [2]}/>



    </div>
  )
}

export default Work