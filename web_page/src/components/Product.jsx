import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.product.img} alt={props.product.picName}/>
          <Card.Body>
            <Card.Title>{props.product.picName}</Card.Title>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </>
      );
    }

export default Product