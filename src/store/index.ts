import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice/counterSlice';
import countDownReducer from './countDownSlice/countDownSlice'

export interface RootState {
  counter: {
    count:number
  }
  countDown: {
      count: number; 
  };
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    countDown: countDownReducer
  },
});


export default store;
