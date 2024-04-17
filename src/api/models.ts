export interface Question {
    id: number;
    type: string;
    question: string;
    options?: string[];
    correctAnswer?: string;
    correctAnswers?: string[];
  }