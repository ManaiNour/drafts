import React, { useContext, useEffect, useState } from 'react'
import Axios from '../utils/Axios'
import { authContext } from '../context/ContextAuth'

function MyOrders() {
const [orders,setOrders]=useState()
const {auth}=useContext(authContext)
console.log(auth);

    useEffect(()=>{
       {auth&& Axios.get('/api/order/user',{headers:{authorization:`Bearer ${auth.token}`}}).then((res)=>console.log(res.data))
}
    })
  return (
    <div>
      
    </div>
  )
}

export default MyOrders