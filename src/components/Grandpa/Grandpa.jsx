import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import './Grandpa.css';
export const RingContext = createContext('Gold Ring')
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
            <section className='flex'>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='golden ring'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunt></Aunt>
                    </RingContext.Provider>
                </MoneyContext.Provider>
            </section>
        </div>
    );
};

export default Grandpa;