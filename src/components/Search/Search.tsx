import { ChangeEvent, useState } from "react";
import type { FC } from "react";
import { Button } from "../../assets/components/Button/Button";
import { Input } from "../../assets/components/Input/Input";
import classes from "./Search.module.scss";

import { setDataLoad } from "../../store/dataSlice/slice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export interface searchType {
	id: number;
	title: string;
	value: string;
	input: string;
	handler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC = () => {
	const dispatch = useAppDispatch();
	const [location, setLocation] = useState<string>("Москва");
	const [date, setDate] = useState<string>("2020-07-07");
	const [number, setNumber] = useState<string>("1");

	const search = () => {
		dispatch(setDataLoad(location));
	};

	const searchArr = [
		{
			id: 1,
			title: "Локация",
			input: "text",
			value: location,
			handler: (event: ChangeEvent<HTMLInputElement>) => {
				setLocation(event.target.value);
			},
		},
		{
			id: 2,
			title: "Дата заселения",
			input: "date",
			value: date,
			handler: (event: ChangeEvent<HTMLInputElement>) => {
				setDate(event.target.value);
			},
		},
		{
			id: 3,
			title: "Количество дней",
			input: "text",
			value: number,
			handler: (event: ChangeEvent<HTMLInputElement>) => {
				setNumber(event.target.value);
			},
		},
	];

	return (
		<div className={classes.wrapper}>
			{searchArr.map(({ id, title, value, input, handler }: searchType) => (
				<div className={classes.content} key={id}>
					<h1 className={classes.title}>{title}</h1>

					<Input size="short" type={input} onChange={handler} value={value} />
				</div>
			))}
			<Button className={classes.button} onClick={search} size="short">
				Найти
			</Button>
		</div>
	);
};
