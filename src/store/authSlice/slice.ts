import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "./type";

const LS_KEY = "AUTH";

const initialState: IAuth = {
	success: JSON.parse(localStorage.getItem(LS_KEY) ?? "false"),
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setSuccess: (state, action: PayloadAction<boolean>) => {
			state.success = action.payload;
			localStorage.setItem(LS_KEY, JSON.stringify(state.success));
		},
	},
});

export const { setSuccess } = authSlice.actions;

export default authSlice.reducer;
