

export interface CountDownProps {
    hours?: number;
    minutes?: number;
    seconds?: number;
  }

  export  interface RootState {
    countDown: CountDownState;
    counter: CounterState;
  }
  
  // Определение структуры состояния среза counter
    interface CounterState {
    count: number;
  }
   interface CountDownState {
    count: [number, number, number];
  }