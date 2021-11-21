import { createSlice } from "@reduxjs/toolkit";
import { storage } from "@shared/utils";

interface IAuthSlice {
  jwtToken: String | boolean;
}

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    jwtToken: storage.getToken(),
  } as IAuthSlice,
  reducers: {
    addToken: (state: any, { payload }) => {
      storage.setToken(payload);
      state.jwtToken = payload;
    },
    removeToken: (state: any) => {
        storage.clear();
        state.jwtToken = "";
    },
  },
});

export const { addToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
