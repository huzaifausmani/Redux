import { createSlice } from "@reduxjs/toolkit";
/**
 * @name counterSlice
 * @increment {reducer} to increment the value of counter
 * @decrement {reducer} to decrement the value of counter
 * @returns returns actions and the reducer for counterSlice.
 */
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 7
        },
        decrement: (state) => {
            state.value -= 7
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer