import type { FC } from "react";
import Data from "../../components/Data/Data";
import { Favorites } from "../../components/Favorites/Favorites";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";

import classes from "./Home.module.scss";

export const Home: FC = () => {
	return (
		<div className={classes.wrapper}>
			<Header />
			<div className={classes.content}>
				<Search />
				<Data />
				<Favorites />
			</div>
		</div>
	);
};
