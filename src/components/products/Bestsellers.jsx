import React from 'react'
import Products from './Products'
import { bestsellers } from '../../data'

function Bestsellers() {
  return <Products items={bestsellers} heading="Bestsellers"/>
}

export default Bestsellers;
