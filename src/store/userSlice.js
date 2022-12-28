import { createSlice } from '@reduxjs/toolkit'
import { getAuth } from 'firebase/auth';

const initialState = {
userEmail: null,
userPassword:null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser:(state,action) =>{
        state.userEmail = action.payload.userEmail,
        state.userPassword = action.payload.userPassword
    },
    setUserLogoutState:(state,action)=>{
        state.userEmail = null,
        state.userPassword = null,

    },
  }
});

export const {setActiveUser,setUserLogoutState} = userSlice.actions
export const auth = getAuth(app)


export default userSlice.reducer