import React from 'react';
import { Props } from './ShortAnswerType';


const ShortAnswer: React.FC<Props> = ({ handleChangeShort, inputValue }) => {
    return (
        <>
            <input
                className='short-answer'
                type="text"
                onChange={(event) => handleChangeShort(event.target.value)}
                value={inputValue}
            />
        </>
    );
};

export default ShortAnswer;
