import { RootState } from "../store";

export const locationSelector = (state: RootState) => state.location.location;
