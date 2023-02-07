import type { FC } from "react";
import { Star } from "../../assets/components/Star/Star";
import classes from "./DataItem.module.scss";
import { useAppSelector } from "../../hooks/useAppSelector";
import { favoriteSelector } from "../../store/favoriteSlice/selector";
import {
	setAddFavorite,
	setRemoveFavorite,
} from "../../store/favoriteSlice/slice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { FavoriteItems } from "../../store/favoriteSlice/type";

export interface DataItemProps {
	id: number;
	label: string;
	locationName: string;
	_score: number;
	isFavorite: boolean;
}

export interface DataItemComponent extends FC<DataItemProps> {}

export const DataItem: DataItemComponent = ({
	label,
	_score,
	id,
	locationName,
}) => {
	const favorites = useAppSelector(favoriteSelector);
	const dispatch = useAppDispatch();

	const isFavoriteExist = favorites.some(
		(item: FavoriteItems) => item.id === id
	);

	const handleIsFavorite = () => {
		if (!isFavoriteExist)
			dispatch(
				setAddFavorite({
					id: id,
					locationName: locationName,
					label: label,
					_score: _score,
				})
			);
		else dispatch(setRemoveFavorite(id));
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.icon}>
				<svg
					width="35"
					height="35"
					viewBox="0 0 35 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15.9359 1.33499C15.1648 2.06053 12.0586 4.98008 9.03711 7.82127C6.01289 10.6596 3.11719 13.3847 2.59766 13.8722C2.07812 14.3598 1.33984 15.0534 0.957031 15.4104C0.574219 15.7702 0.202344 16.1214 0.13125 16.1939L0 16.3245L0.902344 17.3983C1.39727 17.9875 1.82109 18.4692 1.84023 18.4692C1.86211 18.4663 3.48906 16.9572 5.45781 15.1143C15.7883 5.44442 17.4562 3.88887 17.4754 3.89468C17.4863 3.90048 18.7605 5.09326 20.3082 6.54723C21.8531 8.0012 25.3449 11.2806 28.0629 13.8374C30.7809 16.3942 33.0176 18.4866 33.0312 18.4866C33.0449 18.4866 33.0641 18.4721 33.0723 18.4576C33.0859 18.4344 33.1023 18.4373 33.1297 18.4605C33.1816 18.504 33.1023 18.5911 34.0566 17.4419C34.475 16.9398 34.8578 16.4813 34.9098 16.4232L35.0027 16.3187L32.7113 14.1741C31.4508 12.9929 28.4895 10.2184 26.127 8.00991C23.7672 5.79848 20.8797 3.09659 19.7094 2.00248L17.5875 0.0145168H17.4645H17.3414L15.9359 1.33499Z"
						fill="#41522E"
					/>
					<path
						d="M15.6051 8.00708C14.6098 8.94157 11.859 11.5274 9.49375 13.7504L5.19531 17.7931L5.20078 26.1281L5.20898 34.4631L5.26914 34.5821C5.30195 34.6489 5.38125 34.7504 5.44414 34.8056C5.67109 35.0145 5.37852 35 9.7125 35H13.6172L13.6227 31.3056C13.6309 27.6315 13.6309 27.614 13.6883 27.4834C13.7594 27.3151 13.8961 27.17 14.0547 27.0946C14.1777 27.0336 14.1969 27.0336 17.4016 27.0249C20.9672 27.0162 20.8141 27.0104 21.0164 27.199C21.1586 27.3325 21.2379 27.4805 21.2707 27.6721C21.2926 27.7882 21.3008 28.9897 21.3008 31.4217V35L25.3586 34.9942L29.4191 34.9855L29.5012 34.9014C29.5477 34.8549 29.6242 34.7185 29.6734 34.5966L29.7637 34.3761L29.7691 26.0759L29.7746 17.7757L23.6496 12.044C20.177 8.79356 17.5 6.30932 17.4699 6.30932C17.4344 6.30642 16.7945 6.88975 15.6051 8.00708Z"
						fill="#41522E"
					/>
				</svg>
			</div>
			<div className={classes.info}>
				<div className={classes.title}>{label}</div>
				<div className={classes.days}> 7 июля 2020 -- 1 день</div>
				<Star />
			</div>

			<div className={classes.end}>
				<svg
					className={isFavoriteExist ? classes.heart : classes.empty}
					onClick={handleIsFavorite}
					width="23"
					height="20"
					viewBox="0 0 23 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
						fill={isFavoriteExist ? "#E55858" : "white"}
						stroke={isFavoriteExist ? "none" : "#C4C4C4"}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<div className={classes.price}>
					Price: <span>{_score} ₽</span>
				</div>
			</div>
		</div>
	);
};
