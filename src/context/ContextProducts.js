import React, { useEffect, useReducer, useState } from "react";
import Axios from "../utils/Axios";

export const ProductsContext = React.createContext();

const productreducer = (state, action) => {
  switch (action.type) {
    case "Fetch":return action.payload;
    default:  return state
  }
}
function ContextProducts({ children }) {
  const [products, dispatch] =useReducer(productreducer,{products:[],loading:false});
  useEffect(()=>{
    dispatch({type:'Fetch',payload:{loading:true,products:[]}})
    Axios.get('/api/products').then((res)=>dispatch({type:'Fetch',payload:{products:res.data.data,loading:false}}))
   
  },[])
  return (
    <ProductsContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ContextProducts;