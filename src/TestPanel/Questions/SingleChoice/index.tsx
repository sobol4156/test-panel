import React from 'react'
import { Props } from './SingleChoiceType'

const Index: React.FC<Props> = ({ options, selected, handleOptionChange }) => {

    return (
        <>
            {
                options?.map((option: string, index: number) => (

                    <div key={index}>
                        <label className="option">
                            <input
                                type="radio"
                                name="option"
                                value={option}
                                checked={Number(selected) === index}
                                onChange={() => handleOptionChange(index.toString())}
                            />
                            {option}
                        </label>
                    </div>
                ))
            }
        </>

    )
}
export default Index