import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountApi from "../../api/accountApi";
import STORAGE_KEY from "../../constants/storage-key";

export const ACCOUNT_LOGIN = "account/login"

export const login = createAsyncThunk(ACCOUNT_LOGIN, async (payload) => {
  const res = await accountApi.login(payload);
  console.log(res);
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
    setting: {}
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    }
  }
});

export const { reducer } = accountSlice;
export default reducer;
