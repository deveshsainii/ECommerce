import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userinfo: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : null,

}

const userauth = createSlice({
    name: "userauth",
    initialState,
    reducers: {
        setcredientials: (state, action) =>{
            state.userinfo = action.payload;

            localStorage.setItem('userinfo', JSON.stringify(action.payload));

            const expirationtime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

            localStorage.setItem('expirationtime',expirationtime);
        },

        userlogout: (state) => {
            state.userinfo = null;
            localStorage.clear();
        }
    }
});

export const {setcredientials, userlogout} = userauth.actions;

export default userauth.reducer;
