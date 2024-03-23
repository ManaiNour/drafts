import React, { useContext } from 'react'
import { ProductsContext } from '../context/ContextProducts'
import CardProduct from '../components/CardProduct'

function Products() {
    const {products}=useContext(ProductsContext)

    return (<div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
  {products.products&&products.products.toReversed().map((product)=>{return <CardProduct product={product}/>})}</div>
    )
}

export default Products