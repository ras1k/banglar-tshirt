import React from 'react';
import SpecialOne from '../SpecialOne/SpecialOne';

const Myself = ({ring}) => {
    return (
        <div>
            <p>Me</p>
            <SpecialOne ring={ring}></SpecialOne>
        </div>
    );
};

export default Myself;