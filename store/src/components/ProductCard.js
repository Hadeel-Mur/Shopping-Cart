import React from 'react'
import { Card, Button, Form, Row, Col} from 'react-bootstrap'

function ProductCard(props) {
    const product = props.product;

  return (
    <Card>
        <Card.Title>
            {product.title}
        </Card.Title>
        <Card.Text>
            ${product.price}
        </Card.Text>
        <Button variant='primary'>Add To Cart</Button>
    </Card>
  )
}

export default ProductCard