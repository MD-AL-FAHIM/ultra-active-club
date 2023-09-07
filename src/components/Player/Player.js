import React from 'react';
import './Player.css'

const Player = ({player , handlAddToCart}) => {
    const {img , name,  duration} = player;

    
    return (
        <div className='player'>
            <img src={img} alt="" />
            <div className="player-info">
                <p>Name: {name}</p>
                <p>Duration: {duration}</p>
            </div>
            <nav>
                <button onClick={()=> handlAddToCart(player)} className='btn-cart'><p>Add To List</p></button>
            </nav>
        </div>
    );
};

export default Player;