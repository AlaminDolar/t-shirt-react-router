import React from 'react';
import './Tshirt.css';

const Tshirt = ({ handleAddToCart, ts }) => {
    const { name, picture, price } = ts;
    return (
        <div className='T-shirt'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p><small>Price: {price}</small></p>
            <button onClick={() => handleAddToCart(ts)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;