import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from '../../store/counterSlice/counterSlice'
import { update } from "../../store/countDownSlice/countDownSlice";

import { QuestionArray, RootState } from './QuestionsType'

import "./Question.css";

import useApiFetch from "../../api";
import SingleChoice from "./SingleChoice";
import MultipleChoice from './MultipleChoice'
import ShortAnswer from './ShortAnswer'
import LongAnswer from './LongAnswer'



const Question = () => {
  const { data, loading } = useApiFetch();
  const count: number = useSelector((state: RootState) => state.counter.count);


  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputShortValue, setInputShortValue] = useState<string>('');
  const [inputLongValue, setInputLongValue] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string | string[] }>({});

  const dispatch = useDispatch()

  useEffect(() => {
    const storedAnswers = localStorage.getItem('answer');
    if (storedAnswers) {
      setUserAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  useEffect(() => {
    if (count !== undefined) {
      localStorage.setItem('count', JSON.stringify(count))
    }
  }, [count])

  useEffect(() => {
    localStorage.setItem('answer', JSON.stringify(userAnswers))
  }, [userAnswers])

  //сохранение ответов

  const updateUserAnswers = (question: string, answer: string | string[]) => {
    setUserAnswers({
      ...userAnswers,
      [question]: answer
    })
  }


  // обновления выбранного ответа
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);

  };
  // обновления выбранных ответов
  const handleOptionsChange = (optionIndex: string) => {
    const index = parseInt(optionIndex);
    if (!isNaN(index)) {
      if (selectedOptions.includes(index.toString())) {
        setSelectedOptions(selectedOptions.filter((idx) => idx !== index.toString()));
      } else {
        setSelectedOptions([...selectedOptions, index.toString()]);
      }
    }
  };

  // обновления краткого ответа
  const handleChangeShort = (value: string) => {
    setInputShortValue(value)
  }

  // обновления длинного ответа
  const handleChangeLong = (value: string) => {
    setInputLongValue(value)
  }




  const typeQuestion: QuestionArray = Array.isArray(data) ? data : [];

  const nextAnswer = () => {
    if (typeQuestion[count].type === "single-choice") {
      updateUserAnswers(typeQuestion[count].question, selectedOption || '')
    }
    else if (typeQuestion[count].type === "multiple-choice") {
      updateUserAnswers(typeQuestion[count].question, selectedOptions)
    }
    else if (typeQuestion[count].type === "short-answer") {
      updateUserAnswers(typeQuestion[count].question, inputShortValue)
    }
    else if (typeQuestion[count].type === "long-answer") {
      updateUserAnswers(typeQuestion[count].question, inputLongValue)
    }
    console.log(userAnswers)
    dispatch(increment());
    setSelectedOption(null);
    setSelectedOptions([]);
    setInputShortValue('');
    setInputLongValue('');

  };

  const resetTest = () => {
    dispatch(update({ hours: 0, minutes: 20, seconds: 0 }))
    dispatch(reset())
    setUserAnswers({})
    localStorage.setItem('answer', '')

  }

  return (
    <div className="question-container">
      {loading && <h2>Загрузка...</h2>}
      {!loading && typeQuestion && count < typeQuestion.length && <div><h4>{typeQuestion[count].question}</h4><div className="options-container">
        {typeQuestion[count].type === "single-choice" && <SingleChoice options={typeQuestion[count].options} selected={selectedOption}
          handleOptionChange={handleOptionChange} />}
        {typeQuestion[count].type === "multiple-choice" && <MultipleChoice options={typeQuestion[count].options} selected={selectedOptions}
          handleOptionsChange={handleOptionsChange} />}
        {typeQuestion[count].type === "short-answer" && <ShortAnswer handleChangeShort={handleChangeShort} inputValue={inputShortValue} />}
        {typeQuestion[count].type === "long-answer" && <LongAnswer handleChangeLong={handleChangeLong} inputLongValue={inputLongValue} />}

      </div><button onClick={nextAnswer} className="answer-btn">Ответить</button></div>}

      {!loading && count >= typeQuestion.length && (
        <div><h2>Вы закончили тест. Поздравляем!</h2>
          <button onClick={resetTest}>Попробовать снова</button>

        </div>
      )}

    </div>
  );
};

export default Question;
