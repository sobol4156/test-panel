import React from 'react';
import { Props } from './MultipleChoiceType';


const MultipleChoice: React.FC<Props> = ({ options, selected, handleOptionsChange }) => {
    return (
        <div>
            {options?.map((option, index) => (
                <div key={index}>
                    <label className="option">
                        <input
                            className='checkbox'
                            type="checkbox"
                            name="option"
                            value={option}
                            checked={selected.includes(index.toString())}
                            onChange={() => handleOptionsChange(index.toString())}
                        />
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default MultipleChoice;
