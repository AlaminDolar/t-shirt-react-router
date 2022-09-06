import React from 'react';
import Cart from '../Cart/Cart';
import useTShirt from '../hooks/tShirts';
import Tshirt from '../Tshirt.js/Tshirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    return (
        <div className='home-container'>
            <div className="T-shirt-container">
                {
                    tShirts.map(tshirts => <Tshirt
                        key={tshirts._id}
                        ts={tshirts}

                    ></Tshirt>)
                }
            </div>
            <div className="Cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;