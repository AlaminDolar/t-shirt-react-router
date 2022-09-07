import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirt from '../hooks/tShirts';
import Tshirt from '../Tshirt.js/Tshirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirts => tShirts._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert("Already Added");
        }
    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirts => tShirts._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="T-shirt-container">
                {
                    tShirts.map(tshirts => <Tshirt
                        key={tshirts._id}
                        ts={tshirts}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="Cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;