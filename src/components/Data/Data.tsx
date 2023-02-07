import { useEffect } from "react";
import type { FC } from "react";
import classes from "./Data.module.scss";
import { DataItem } from "../DataItem/DataItem";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setDataLoad } from "../../store/dataSlice/slice";
import { DataItems } from "../../store/dataSlice/type";
import { dataSelector } from "../../store/dataSlice/selector";
import { countSelector } from "../../store/favoriteSlice/selector";
import { Carousel } from "../../assets/components/CarouselView/Carousel";

const Data: FC = () => {
	const data = useAppSelector(dataSelector);
	const count = useAppSelector(countSelector);
	const dispatch = useAppDispatch();
	const { city } = useAppSelector(state => state.data);

	useEffect(() => {
		const search = city;
		dispatch(setDataLoad(search));
	}, [dispatch, city]);

	return (
		<div className={classes.wrapper}>
			<div className={classes.header}>
				<div className={classes.leftSide}>
					<span className={classes.hotels}>Отели </span>
					<svg
						width="11"
						height="20"
						viewBox="0 0 11 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1.33334L9.66667 10L1 18.6667"
							stroke="#A7A7A7"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span className={classes.city}>{city}</span>
				</div>
				<div className={classes.date}></div>
				07 июля 2020
			</div>

			<div className={classes.content}>
				<Carousel />
				<div className={classes.favorites}>
					Добавлено в избранное: <span>{count}</span> отеля
				</div>
			</div>
			<div className={classes.items}>
				{data.length === 0 ? (
					<div className={classes.zero}>
						К сожалению по вашему запросу ничего не удалось найти
					</div>
				) : (
					data.map(
						({ id, locationName, _score, label, isFavorite }: DataItems) => (
							<DataItem
								key={id}
								id={id}
								locationName={locationName}
								_score={_score}
								label={label}
								isFavorite={isFavorite}
							/>
						)
					)
				)}
			</div>
			{}
		</div>
	);
};

export default Data;
