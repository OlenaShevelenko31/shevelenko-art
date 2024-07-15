import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.item.img} alt={props.item.picName} />
        <Card.Body>
          <Card.Title>{props.item.picName}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );

}

export default Product