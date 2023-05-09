import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // console.log(cart)
    let message;
    if (cart.length === 0) {
        message = <p>Add Something</p>
    }
    return (
        <div>
            <h2 className={cart.length > 2 ? 'orange' : 'purple'}>Order Summary: {cart.length}</h2>
            {
                cart.length > 2 ? '' : <p>Buy More</p>
            }
            {message}
            <div>
                {
                    cart.map(tshirt => <p
                        key={tshirt._id}>Name: {tshirt.name} &nbsp;
                        <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button> </p>
                        )
                }
            </div>
        </div>

    );
};

export default Cart;