import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    logged: false
}

const loggedInSlice = createSlice({
    name: 'logged',
    initialState,
    reducers: {
        logInInReducer(state, action){
            return {logged: true} 
        },
        logOutInReducer(state, action){
            return {logged: false}
        }
    }
})

export default loggedInSlice.reducer

export const {logInInReducer, logOutInReducer} = loggedInSlice.actions