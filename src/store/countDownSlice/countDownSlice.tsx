
import { createSlice } from '@reduxjs/toolkit';



const storedTimer = localStorage.getItem('time');

const initialTimer = storedTimer ? JSON.parse(storedTimer) : [0, 20, 0];

const countDownSlice = createSlice({
  name: 'countDown',
  initialState: {
    count: initialTimer
  },
  reducers: {
    restart(state){
        state.count = [0,20,0]
        localStorage.setItem('time', JSON.stringify([0, 20, 0]));
    },
    update(state,action){
        const { hours, minutes, seconds } = action.payload;
        state.count = [hours, minutes, seconds];
        localStorage.setItem('time', JSON.stringify([hours, minutes, seconds]));
        
    }
  },
});

export const { restart, update} = countDownSlice.actions;

export default countDownSlice.reducer;