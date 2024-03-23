import React, { useContext } from 'react'
import { CardContext } from '../context/ContextCard'
import OrderCard from '../components/OrderCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Card() {
const {card,dispatchCard}=useContext(CardContext)
let total=0
card.forEach((ele)=>{
  total=total+(ele.product.price*ele.quantity)})
  console.log(total);
  return (
    <div style={{display:'flex',flexWrap:"wrap",gap:"30px"}}>

{card.map((prod)=><OrderCard product={prod}/>)}

<br/>
{card.length&& <Link to={'/order'}><Button>order Now</Button></Link>}
    </div>
  )
}

export default Card