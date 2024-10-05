import { configureStore } from "@reduxjs/toolkit";
import registerReducer   from "../slices/registerSlice";

const store = configureStore({
    reducer: {
        registerStore: registerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store    