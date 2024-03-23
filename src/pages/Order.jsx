import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CardContext } from '../context/ContextCard'
import Axios from '../utils/Axios'
import { authContext } from '../context/ContextAuth'
import { useNavigate } from 'react-router-dom'

function Order() {
    const {card,dispatchCard}=useContext(CardContext)
    const {auth}=useContext(authContext)
    let total=0
    card.forEach((ele)=>{
      total=total+(ele.product.price*ele.quantity)})
      console.log(total)
      const navigate =useNavigate()
     const hundleOrder=()=>{

        const products=card.map((product)=>{return{...product,product:product.product._id}})
     Axios.post('/api/order',{products,user:auth.id,total},{headers:{authorization:`Bearer ${auth.token}`}}).then((res)=>{
        if (res.data.status==="success"){
            alert('order on road ')
            navigate('/')

        }
     }).catch((e)=>console.log(e))

     }

  return (
    <div>

<h1>total price: {total}</h1>

<Button onClick={hundleOrder}>get your order now</Button>
      
    </div>
  )
}

export default Order