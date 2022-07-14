import loggedInReducer from "../login/slice/LoginSlice"
import { configureStore } from "@reduxjs/toolkit";

const store =  configureStore({
    reducer: {
        logged: loggedInReducer
    }
})

export default store