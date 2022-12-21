import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardUser({el}) {
  return (
    <div> 
      {""}
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.img}style={{maxWidth:"200px",minwidth:"150px",maxHeight:"250px",minHeight:"170px"}} />
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        {el.age}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default CardUser;