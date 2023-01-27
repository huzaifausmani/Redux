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
        value: 0,
        displayInc: true
    },
    reducers: {
        increment: (state) => {
            state.value = "Huh, You thought this increments... Gotcha! Press Decrement"
            state.displayInc = false
        },
        decrement: (state) => {
            state.value = "Gotcha again.... Lmao, this doesn't Decrement"
            state.displayInc = true
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer