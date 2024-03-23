import { IAuthResponse } from "@/models/IAuthResponse";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addLocalstorage } from "@/utils/localStorage";

export interface userState {
  value: null | IAuthResponse;
}

const initialState: userState = {
  value: null,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthResponse,string>) => {
      state.value = action.payload;
    },
    resetUser: (state) => {
      state.value = null;
    },
  },
});

export const { setUser, resetUser } = currentUserSlice.actions;
export const selectCount = (state: RootState) => state.currentUser.value
export default currentUserSlice.reducer;
