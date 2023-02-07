import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { DataItems } from "./../dataSlice/type";

export const getHotel = async ({
	payload,
}: PayloadAction<DataItems>): Promise<DataItems[]> => {
	const responce = await axios.get(
		`https://engine.hotellook.com/api/v2/lookup.json?query=${payload}&lang=ru&lookFor=both&limit=10`
	);
	console.log(payload);
	return responce.data.results.hotels;
};

export const getLocation = async (): Promise<DataItems[]> => {
	const responce = await axios.get(
		"https://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=10"
	);
	return responce.data.results.locations;
};
