import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ILocation, LocationItems } from "./type";

// const LS_KEY = "SC";

const initialState: ILocation = {
	location: [],
	isLoading: false,
};

export const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		setLocationLoad: state => {
			state.isLoading = true;
		},

		setLocationSuccess: (state, action: PayloadAction<LocationItems[]>) => {
			state.location = action.payload;
			state.isLoading = false;
		},

		setLocationFailure: state => {
			state.isLoading = false;
		},
	},
});

export const { setLocationLoad, setLocationSuccess, setLocationFailure } =
	locationSlice.actions;

export default locationSlice.reducer;
