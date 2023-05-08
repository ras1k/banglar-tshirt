import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <p>Home</p>
            <p>{tshirts.length}</p>
        </div>
    );
};

export default Home;