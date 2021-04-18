import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountApi from "../../api/accountApi";
import STORAGE_KEY from "../../constants/storage-key";

export const ACCOUNT_LOGIN = "account/login"

export const login = createAsyncThunk(ACCOUNT_LOGIN, async (payload) => {
  const res = await accountApi.login(payload);
  if (res.status === 200) {
    localStorage.setItem(STORAGE_KEY.TOKEN, res.token);
    localStorage.setItem(STORAGE_KEY.USER, JSON.stringify(res.data));
  }
  return res.data;
}
)


const accountSlice = createSlice({
  name: "account",
  initialState: {
    current: JSON.parse(localStorage.getItem(STORAGE_KEY.USER)) || {},
  },
  reducers: {
    logout(state) {
      localStorage.clear(STORAGE_KEY.USER);
      localStorage.clear(STORAGE_KEY.TOKEN);
      state.current = {}
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  }
});

export const { reducer, actions } = accountSlice;
export const { logout } = actions;
export default reducer;
