export interface IData {
	data: DataItems[];
	isLoading?: boolean;
	city: string;
}

export interface DataItems {
	id: number;
	label: string;
	locationName: string;
	_score: number;
	isFavorite: boolean;
}
