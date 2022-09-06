import React from 'react';
import './Tshirt.css';

const Tshirt = (props) => {
    const { name, picture, price } = props.ts;
    return (
        <div className='T-shirt'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p><small>Price: {price}</small></p>
            <button>Add to cart</button>
        </div>
    );
};

export default Tshirt;