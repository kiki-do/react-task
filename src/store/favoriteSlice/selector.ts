import { RootState } from "./../store";
export const favoriteSelector = (state: RootState) => state.favorites.favorites;
export const countSelector = (state: RootState) => state.favorites.count;
