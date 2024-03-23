import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../context/ContextProducts'
import CardProduct from '../components/CardProduct'
import Axios from '../utils/Axios'

function Home() {
  const {products}=useContext(ProductsContext)

  return (<div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>

    {products.loading&&<img src="https://i.gifer.com/ZKZg.gif"/>}
{products.products&&products.products.slice(0,5).map((product)=>{return <CardProduct product={product}/>})}</div>
  )
}

export default Home