import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Aunt = () => {
    const ring = useContext(RingContext)
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h3>Aunt <br /> {ring}</h3>
            <br /> <br />
            <h4>lol: {money}</h4>
        </div>
    );
};

export default Aunt;