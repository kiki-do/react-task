import { PayloadAction } from "@reduxjs/toolkit";
import { TakeableChannel } from "redux-saga";
import { getHotel } from "./api";
import { DataItems } from "./../dataSlice/type";
import { put, takeEvery } from "redux-saga/effects";
import { setDataSuccess } from "../dataSlice/slice";

function* workSetDataFetch(label: PayloadAction<DataItems>) {
	const data: DataItems[] = yield getHotel(label);
	yield put(setDataSuccess(data));
}

function* dataSaga() {
	yield takeEvery("data/setDataLoad", workSetDataFetch);
}

export default dataSaga;
