import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProducts } from '../ProductsStore';

function CartProducts(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProducts(id);

    return (
        <>
        <h3>{productData.title}</h3>
        <p>Total: {quantity}</p>
        <p>${ (quantity * productData.price).toFixed(2) }</p>
        <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        </>
    )
}

export default CartProducts;