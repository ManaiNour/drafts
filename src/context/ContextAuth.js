import React, { createContext, useEffect, useState } from 'react'


 export const authContext=createContext()

function ContextAuth({children}) {
    const [auth,setAuth]=useState(undefined)

 useEffect(()=>{
  localStorage.getItem("user") ? setAuth(JSON.parse(localStorage.getItem("user"))):setAuth(null)
 },[])
  return (
 <authContext.Provider value={{auth,setAuth}}>
    {children}
    </authContext.Provider>
  )
}

export default ContextAuth