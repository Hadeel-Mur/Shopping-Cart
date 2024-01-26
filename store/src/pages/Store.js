import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {productArray} from '../ProductsStore'

function Store() {
  return (
    <>
    <h1 className='p-3' align='center'>Welcome to the store!</h1>
    <Row xs={1} md={3} className='g-4'>
        {productArray.map((product, idx) => (
           <Col align='center' key={idx}>
           <h1>{product.title}</h1>
          </Col>
        ))}
    </Row>
    </>
    )
}

export default Store;