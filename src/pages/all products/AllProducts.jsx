import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import { allProducts } from '../../data'

function AllProducts() {
  return (
    <div>
      <Navbar/>
      <Products heading="products" items={allProducts}/>
    </div>
  )
}

export default AllProducts
