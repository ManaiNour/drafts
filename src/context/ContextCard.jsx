import React, { createContext, useReducer } from "react";
export const CardContext = createContext();

const cardreducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const founded=state.findIndex((e)=>e.product._id==action.payload._id)

      console.log(founded);
      if(founded==-1){
        return [...state,{product:action.payload,quantity:1}]
      }
      else {
        const newstate=state.map((element,i)=>{
          if (i==founded){
          return { ...element,quantity:element.quantity+1}

          } else{return element}       })    
          return newstate
      }
    }
    case "INCREASE":return state.map((prod)=>prod.product._id==action.payload.product._id?{...prod,quantity:prod.quantity+1}:prod)
    case "DECREASE":return state.map((prod)=>{
   
      return prod.product._id==action.payload.product._id?prod.quantity>1?{...prod,quantity:prod.quantity-1}:prod:prod}
      )
case "DELETE":return state.filter((prod)=>prod.product._id!=action.payload.product._id?prod:null)
   
    
    default:
      return state;
  }
};
function ContextCard({ children }) {
  const [card, dispatchCard] = useReducer(cardreducer, []);
  console.log(card);
  return (
    <CardContext.Provider value={{ card, dispatchCard }}>
      {children}
    </CardContext.Provider>
  );
}

export default ContextCard;