import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export default configureStore({
    reducer: {
        /* The store now knows how to change the state of counter */
        counter: counterReducer
    }
})