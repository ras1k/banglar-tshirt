import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // console.log(cart)
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            <div>
                {
                    cart.map(tshirt => <p
                        key={tshirt._id}>lol: {tshirt.name}
                        <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button> </p>)
                }
            </div>
        </div>

    );
};

export default Cart;