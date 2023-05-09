import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const SpecialOne = ({ring}) => {
    const angti = useContext(RingContext);
    return (
        <div>
            <p>Her</p>
            {ring} <br />
            {angti}
        </div>
    );
};

export default SpecialOne;