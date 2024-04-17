import { useEffect, useState } from "react";
import { Question } from "./models";

const apiUrl = "https://661da41698427bbbef024d89.mockapi.io/qustions";

const useApiFetch = () => {
  const [data, setData] = useState<Question | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prodData:any = [
    {
      "type": "single-choice",
      "question": "Какой из нижеперечисленных методов преобразует строку в целое число в JavaScript?",
      "options": [
        "parseInt()",
        "parseFloat()",
        "Number()",
        "toFixed()"
      ],
      "correctAnswer": "parseInt()",
      "id": 1
    },
    {
      "type": "single-choice",
      "question": "Что возвращает оператор typeof для массива?",
      "options": [
        "array",
        "object",
        "array-like",
        "NaN"
      ],
      "correctAnswer": "object",
      "id": 2
    },
    {
      "type": "multiple-choice",
      "question": "Выберите все правильные утверждения о переменных в JavaScript:",
      "options": [
        "Переменные могут быть объявлены с помощью ключевого слова var.",
        "Переменные, объявленные с помощью let, имеют блочную область видимостивидимостивидимостивидимости.",
        "Переменные, объявленные с помощью const, могут быть переопределены видимостивидимостивидимости.",
        "Переменные, объявленные без ключевого слова, всегда имеют глобальную область видимости."
      ],
      "correctAnswers": [
        "Переменные могут быть объявлены с помощью ключевого слова var.",
        "Переменные, объявленные с помощью let, имеют блочную область видимости."
      ],
      "id": 3
    },
    {
      "type": "multiple-choice",
      "question": "Какие из следующих типов данных являются примитивными в JavaScript?",
      "options": [
        "object",
        "string",
        "array",
        "function"
      ],
      "correctAnswers": [
        "string",
        "function"
      ],
      "id": 4
    },
    {
      "type": "short-answer",
      "question": "Что делает метод 'reduce()' в JavaScript?",
      "correctAnswer": "",
      "id": 5
    },
    {
      "type": "short-answer",
      "question": "Что означает термин 'hoisting' в JavaScript?",
      "correctAnswer": "",
      "id": 6
    },
    {
      "type": "short-answer",
      "question": "Что такое замыкание (closure) в JavaScript?",
      "correctAnswer": "",
      "id": 7
    },
    {
      "type": "short-answer",
      "question": "Что делает метод 'map()' в JavaScript?",
      "correctAnswer": "",
      "id": 8
    },
    {
      "type": "long-answer",
      "question": "Расскажите о принципах работы и особенностях замыканий (closures) в JavaScript.",
      "correctAnswer": "",
      "id": 9
    },
    {
      "type": "long-answer",
      "question": "Что такое DOM (Document Object Model) в JavaScript и как он используется?",
      "correctAnswer": "",
      "id": 10
    },
    {
      "type": "long-answer",
      "question": "Как работает асинхронное программирование в JavaScript, и какие инструменты предоставляет JavaScript для работы с асинхронным кодом?",
      "correctAnswer": "",
      "id": 11
    },
    {
      "type": "short-answer",
      "question": "Что означает термин 'hoisting' в JavaScript?",
      "correctAnswer": "",
      "id": 12
    },
    {
      "type": "short-answer",
      "question": "Что такое замыкание (closure) в JavaScript?",
      "correctAnswer": "",
      "id": 13
    },
    {
      "type": "short-answer",
      "question": "Что делает метод 'map()' в JavaScript?",
      "correctAnswer": "",
      "id": 14
    }
  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        
        setData(prodData);
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
      
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useApiFetch;
