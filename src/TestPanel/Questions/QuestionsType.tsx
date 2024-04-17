interface DataType {
    id: number;
    type: string;
    question: string;
    options?: string[];
    correctAnswer?: string;
    correctAnswers?: string[];
  }
export type QuestionArray = DataType[]


export interface RootState {
    counter: CounterState;
  }
  
  
  interface CounterState {
    count: number;
  }