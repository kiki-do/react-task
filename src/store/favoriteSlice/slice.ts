import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFavorite, FavoriteItems } from "./type";

const LS_KEY = "FAVORITE";

const initialState: IFavorite = {
	favorites: [],
	count: 0,
};

export const favoriteSlice = createSlice({
	name: "favorite",
	initialState,
	reducers: {
		setAddFavorite: (state, action: PayloadAction<FavoriteItems>) => {
			state.favorites.push(action.payload);

			state.count++;
		},

		setRemoveFavorite: (state, action: PayloadAction<number>) => {
			state.favorites = state.favorites.filter(
				item => item.id !== action.payload
			);
			state.count--;
		},

		setSortLowByPrice: state => {
			state.favorites.sort((a, b) => {
				return a._score - b._score;
			});
		},
		setSortHighByPrice: state => {
			state.favorites.sort((a, b) => {
				return b._score - a._score;
			});
		},
	},
});

export const {
	setRemoveFavorite,
	setAddFavorite,
	setSortLowByPrice,
	setSortHighByPrice,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
