import './Cart.css'
const Cart = (props) => {
    // const cart = props.cart;
    const { cart } = props;


    let totalPrice = 0;
    let totalSeeping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalSeeping = totalSeeping + product.shipping
    }

    const tax = totalPrice * 7 / 100;
    const Grandtotal = totalPrice + totalSeeping + tax;

    return (
        <div className='cart-item'>
            <h3>Order summery</h3>
            <p>select item: {cart.length}</p>
            <p>Total price:${totalPrice}</p>
            <p>Total seeping:{totalSeeping}</p>
            <p>Total Tax:${tax}</p>
            <h3>Grand Total:{Grandtotal}</h3>
        </div>
    );
};

export default Cart;