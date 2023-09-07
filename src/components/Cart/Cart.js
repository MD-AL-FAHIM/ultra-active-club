import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h1>Exercise Details</h1>
            <h3>Exercise time: {cart.length}</h3>
            <h3>Break time: {}</h3>
        </div>
    );
};

export default Cart;