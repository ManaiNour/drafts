import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from '../utils/Axios'
import { CardContext } from '../context/ContextCard'
import  { authContext } from '../context/ContextAuth'

function SingleProduct() {
    const {id}=useParams()
    const [product,setProduct]=useState(null)
    const {auth}=useContext(authContext)
    const navigate=useNavigate()
    useEffect(()=>{
        Axios.get('/api/products/'+id).then((res)=>{
            setProduct(res.data.data)
    })},[id])
const {card, dispatchCard}=useContext(CardContext)
    const hundleAdd=()=>{
        if(auth){dispatchCard({type:'ADD',payload:product})
    
    alert('added')
    }
        else{
navigate('/login')
        }
    }
  return (
   product&& <div >
      
      <h1>{product.title}
        
      </h1>

      <img width="300px" height={"300px"} src={product.image} />
      <p>{product.price}</p>
      <button onClick={hundleAdd}>add to card</button>
    </div>
  )
}

export default SingleProduct