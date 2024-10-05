import { UserStoreDTO } from '../features/auth/types/dto'
import { UserEntity } from '../entities/user';

import {createSlice, PayloadAction } from '@reduxjs/toolkit'


interface AuthState {
    user:UserEntity | null //ini slicenya ditambah
}
const initialState: AuthState = {user: null}; //ini slicenya ditambah


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setUser(state, action:PayloadAction<UserEntity> ) {
            state.user = action.payload
            // return{
            //     ...state,
            //     id:action.payload.id,
            //     fullName:action.payload.fullName,
            //     email:action.payload.email,
            //     role:action.payload.role,

            // };
        },
        
        removeUser(state) {
            state.user = null
            // return {} as UserEntity
        },

    },
    
})

export const {setUser, removeUser} = authSlice.actions
export default authSlice.reducer;