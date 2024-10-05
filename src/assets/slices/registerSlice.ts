import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
    username: string,
    name:string,
    password:string,
    email:string
}

const initialState: userState = {
    username: "",
    name: "",
    password: "",
    email: ""
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        
        registerUser: (state, action: PayloadAction<userState>) => {
            state.username = action.payload.username
            state.name = action.payload.name
            state.password = action.payload.password
            state.email = action.payload.email
        }
    }})

 export const { registerUser } = registerSlice.actions;
 export default registerSlice.reducer 