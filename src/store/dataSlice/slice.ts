import { DataItems, IData } from "./type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// const LS_KEY = "SC";

const initialState: IData = {
	data: [],
	isLoading: false,
	city: "Москва",
};

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setDataLoad: (state, action: PayloadAction<string>) => {
			state.isLoading = true;
			state.city = action.payload;
		},

		setDataSuccess: (state, action: PayloadAction<DataItems[]>) => {
			state.data = action.payload;
			state.isLoading = false;
		},

		setDataFailure: state => {
			state.isLoading = false;
		},

		setIsFavorite: (state, action: PayloadAction<number>) => {
			state.data.some(item => item.id === action.payload);
		},
	},
});

export const { setDataLoad, setDataSuccess, setDataFailure, setIsFavorite } =
	dataSlice.actions;

export default dataSlice.reducer;
