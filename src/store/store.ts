import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/slice";
import dataReducer from "./dataSlice/slice";
import favoriteReducer from "./favoriteSlice/slice";
import locationReducer from "./locationSlice/slice";
import dataSaga from "./saga/dataSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		auth: authReducer,
		data: dataReducer,
		favorites: favoriteReducer,
		location: locationReducer,
	},
	middleware: [saga],
});
saga.run(dataSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
