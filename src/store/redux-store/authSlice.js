import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {loginStatus: true},
  reducers: {
    setLogin: (state, actions) => {
      state.loginStatus = actions.payload;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
