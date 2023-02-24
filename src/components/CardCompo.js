import React from 'react'
import { Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
 const CardCompo = (props) => {
        const handClick = () =>{
            props.clickMe(props.title)
            
        }
  return (
    <div>
         <Card style={{ width: '18rem',color:"black", }}>
            <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            {props.children}
            <Button onClick={handClick} variant="danger">Go somewhere</Button>
            
          </Card.Body>
        </Card>
        <Link to="/forms">
          <Button> Go to forms </Button>
        </Link>
    </div>
  )
}
export default CardCompo;