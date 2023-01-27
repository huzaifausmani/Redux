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
            if (state.value === 0) { state.value = "Huh, You thought this increments... Gotcha! Press Decrement" }
            if (state.value.includes("again")) { state.value = "Ju tha yhin tk tha..." }
            state.displayInc = false
            if (state.value.includes("Bro")) {
                state.value = 0
                state.displayInc = true
            }
        },
        decrement: (state) => {
            if (state.value.includes("Ju")) { state.value = "Seriously Bro, Bs yhin tk tha..." }
            else { state.value = "Gotcha again.... Lmao, this doesn't Decrement, Don't Press Increment" }
            state.displayInc = true
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer