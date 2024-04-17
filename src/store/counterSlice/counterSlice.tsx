import { createSlice } from '@reduxjs/toolkit';


const initialCount = JSON.parse(localStorage.getItem('count') || 'null' );



const initialState = {
  count: initialCount
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, reset } = counterSlice.actions;

export default counterSlice.reducer;
