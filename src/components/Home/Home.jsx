import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tshirt) =>{
        console.log(tshirt)
    }
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;