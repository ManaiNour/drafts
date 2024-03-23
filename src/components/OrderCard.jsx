import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CardContext } from '../context/ContextCard';

function OrderCard({product}) {
    const {card,dispatchCard}=useContext(CardContext)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.product.image} />
      <Card.Body>
        <Card.Title>{product.product.title}</Card.Title>
        <Card.Text>
        {product.product.price *product.quantity}
        </Card.Text>
        <button onClick={()=>dispatchCard({type:"DECREASE",payload:product})}>-</button>
<button onClick={(e)=>dispatchCard({type:"INCREASE",payload:product})} >+</button>
<button onClick={()=>dispatchCard({type:"DELETE",payload:product})}>delete</button>
        <Card.Text>
            quantity:{product.quantity}
        </Card.Text>
       <Link to={`/products/${product.product._id}`}> <Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default OrderCard;