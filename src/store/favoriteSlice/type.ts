export interface IFavorite {
	favorites: FavoriteItems[];
	count: number;
}

export interface FavoriteItems {
	id: number;
	label: string;
	locationName: string;
	_score: number;
}
