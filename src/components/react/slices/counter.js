import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'count',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decreament: (state) => {
            state.value -= 1;
        }
    }
});

export default counterSlice.reducer;

export const { increment, decreament } = counterSlice.actions;