import React from 'react';
import Myself from '../Myself/Myself';

const Father = ({ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <Myself ring={ring}></Myself>
        </div>
    );
};

export default Father;