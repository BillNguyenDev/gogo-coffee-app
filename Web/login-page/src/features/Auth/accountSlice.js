import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountApi from "../../api/accountApi";
import STORAGE_KEY from "../../constants/storage-key";

export const login = createAsyncThunk('accounts/login', async (payload) => {
  const data = await accountApi.login(payload);
  // localStorage.setItem(STORAGE_KEY.TOKEN, data.token);
  // localStorage.setItem(STORAGE_KEY.USER, JSON.stringify(data.user));
  return data.user
}
)

const accountSlice = createSlice({
  name: "account",
  initialState: {
    // current: JSON.parse(localStorage.getItem(STORAGE_KEY.USER)) || {},
    setting: {}
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload
    }
  }
});

export const { reducer } = accountSlice;
export default reducer;
