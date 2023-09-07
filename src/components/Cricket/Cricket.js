import React, { useEffect, useState } from 'react';
import './Cricket.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Cricket = () => {

    const [players , setPlayers] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(()=> {
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    const handlAddToCart = (selectedPlayer) => {
        const newCart = [...cart , selectedPlayer]
        setCart(newCart);
    }
    
    return (
        <div className='cricket-container'>
            <div className="players-container">
                {
                    players.map( player => <Player
                    key = {player.id}
                    player = {player}
                    handlAddToCart = {handlAddToCart}
                    ></Player>)
                }
            </div>
            <div className="cart-container">
                 <Cart
                 cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Cricket;