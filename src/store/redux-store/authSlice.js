import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {loginStatus: false, loginFetching: false},
  reducers: {
    setLogin: (state, actions) => {
      state.loginStatus = actions.payload;
      state.loginFetching = false;
    },
    setLoginFetchin: (state, actions) => {
      state.loginFetching = actions.payload;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
