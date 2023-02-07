export interface ILocation {
	location: LocationItems[];
	isLoading: boolean;
}

export interface LocationItems {
	id: number;
	_score: number;
	cityName: string;
}
