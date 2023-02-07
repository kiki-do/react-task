import { useState, useMemo } from "react";
import type { FC } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { favoriteSelector } from "../../store/favoriteSlice/selector";
import {
	setRemoveFavorite,
	setSortHighByPrice,
	setSortLowByPrice,
} from "../../store/favoriteSlice/slice";
import { FavoriteItems } from "../../store/favoriteSlice/type";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";
import classes from "./Favorites.module.scss";
import clsx from "clsx";

export const Favorites: FC = () => {
	const [isSort, setIsSort] = useState(false);
	const favorites = useAppSelector(favoriteSelector);
	const dispatch = useAppDispatch();

	const sortByPrice = () => {
		if (!isSort) {
			dispatch(setSortLowByPrice());
			setIsSort(true);
		} else {
			dispatch(setSortHighByPrice());
			setIsSort(false);
		}
	};

	const priceClassName = useMemo(
		() =>
			clsx(classes.price, {
				[classes.disabled]: favorites.length === 0,
			}),
		[favorites]
	);

	const removeFavorite = (id: number) => {
		dispatch(setRemoveFavorite(id));
	};
	return (
		<div className={classes.wrapper}>
			<h1 className={classes.title}>Избранное</h1>

			<div className={classes.filter}>
				<div className={classes.raiting}>
					<span className={classes.text}>Рейтинг</span>
					<div className={classes.icons}>
						<svg
							width="9"
							height="6"
							viewBox="0 0 9 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
								fill="#41522E"
							/>
						</svg>
						<svg
							width="9"
							height="7"
							viewBox="0 0 9 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
								fill="#41522E"
								fillOpacity="0.3"
							/>
						</svg>
					</div>
				</div>
				<button
					onClick={sortByPrice}
					className={classes.price}
					disabled={favorites.length === 0 && true}
				>
					<span className={classes.text}>Цена</span>
					<div className={classes.icons}>
						<svg
							width="9"
							height="6"
							viewBox="0 0 9 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
								fill="#41522E"
								fillOpacity={isSort ? "0.3" : "1"}
							/>
						</svg>
						<svg
							width="9"
							height="7"
							viewBox="0 0 9 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
								fill="#41522E"
								fillOpacity={!isSort ? "0.3" : "1"}
							/>
						</svg>
					</div>
				</button>
			</div>
			<div className={classes.items}>
				{favorites.map(({ id, locationName, _score, label }: FavoriteItems) => (
					<FavoriteItem
						removeFavorite={removeFavorite}
						key={id}
						id={id}
						locationName={locationName}
						_score={_score}
						label={label}
					/>
				))}
			</div>
		</div>
	);
};
