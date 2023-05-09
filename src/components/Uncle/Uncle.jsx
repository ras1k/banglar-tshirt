import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Uncle</h3>
            <p>Grandpa Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Send Money</button>
        </div>
    );
};

export default Uncle;