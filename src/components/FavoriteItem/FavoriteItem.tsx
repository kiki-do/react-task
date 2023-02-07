import type { FC } from "react";
import classes from "./FavoriteItem.module.scss";
import { Star } from "../../assets/components/Star/Star";

export interface FavoriteItemProps {
	id: number;
	label: string;
	locationName: string;
	_score: number;
	removeFavorite: (id: number) => void;
}

export interface FavoriteItemComponent extends FC<FavoriteItemProps> {}

export const FavoriteItem: FavoriteItemComponent = ({
	id,
	label,
	locationName,
	_score,
	removeFavorite,
}) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.header}>
				<h1 className={classes.title}>{label}</h1>
				<svg
					onClick={() => removeFavorite(id)}
					width="21"
					height="18"
					viewBox="0 0 21 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.3807 1.59133C18.8676 1.08683 18.2583 0.686629 17.5878 0.413583C16.9172 0.140537 16.1985 0 15.4727 0C14.7468 0 14.0281 0.140537 13.3576 0.413583C12.687 0.686629 12.0778 1.08683 11.5646 1.59133L10.4997 2.63785L9.43482 1.59133C8.39834 0.572757 6.99258 0.000527962 5.52679 0.000527973C4.06099 0.000527984 2.65523 0.572757 1.61876 1.59133C0.582285 2.6099 1.0921e-08 3.99139 0 5.43187C-1.0921e-08 6.87235 0.582285 8.25383 1.61876 9.2724L2.68367 10.3189L10.4997 18L18.3158 10.3189L19.3807 9.2724C19.8941 8.76814 20.3013 8.16942 20.5791 7.51045C20.857 6.85148 21 6.14517 21 5.43187C21 4.71857 20.857 4.01225 20.5791 3.35328C20.3013 2.69431 19.8941 2.09559 19.3807 1.59133Z"
						fill="#E55858"
					/>
				</svg>
			</div>

			<div className={classes.content}>
				<span className={classes.text}>
					7 июля 2020 <span className={classes.day}> -- 1 день</span>
				</span>
				<div className={classes.bottom}>
					<Star />
					<div className={classes.price}>
						Price: <span>{_score} ₽</span>
					</div>
				</div>
			</div>
		</div>
	);
};
