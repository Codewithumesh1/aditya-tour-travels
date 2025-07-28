import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  token: null,
  loginAt: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    // ✅ Action to set admin on login
    setAdmin: (state, action) => {
      const { admin, token, loginAt } = action.payload;

      state.data = admin;
      state.token = token;
      state.loginAt = loginAt;

     
    },

    // ✅ Action to clear admin on logout
    removeAdmin: (state) => {
      state.data = null;
      state.token = null;
      state.loginAt = null;

    },
  },
});

// Export actions and reducer
export const { setAdmin, removeAdmin } = adminSlice.actions;
export default adminSlice.reducer;
