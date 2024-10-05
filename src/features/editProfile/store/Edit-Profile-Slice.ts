import { UserStoreDTO } from '../../auth/types/dto'

import {createSlice, PayloadAction } from '@reduxjs/toolkit'



const initialState: UserStoreDTO = {} as UserStoreDTO;

const editProfileSlice = createSlice({
    name:"editProfile",
    initialState,
    reducers: {
        SetEditProfile(state, action:PayloadAction<UserStoreDTO> ) {
            return{
                ...state,
                id:action.payload.id,
                fullName:action.payload.fullName,
                biografi:action.payload.biografi,
                role:action.payload.role,
                Image:action.payload.Image
            }
        }

    }
})
export const {SetEditProfile} = editProfileSlice.actions