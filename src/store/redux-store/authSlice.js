import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {loginStatus: false},
  reducers: {
    setLogin: (state, actions) => {
      state.loginStatus = actions.payload;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
