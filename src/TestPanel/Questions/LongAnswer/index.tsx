import React from 'react';
import { Props } from './LongAnswerType';


const LongAnswer: React.FC<Props> = ({ handleChangeLong, inputLongValue }) => {
    return (
        <>
            <textarea
                className='long-answer'
                value={inputLongValue}
                onChange={(event) => handleChangeLong(event.target.value)}
                rows={4}
                cols={50}
                placeholder='Введите ваш ответ...'
            />
        </>
    );
};

export default LongAnswer;
