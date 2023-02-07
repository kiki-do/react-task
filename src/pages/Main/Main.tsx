import type { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector } from "../../store/authSlice/selector";
import { Auth } from "../Auth/Auth";
import { Home } from "../Home/Home";

export const Main: FC = () => {
	const success = useAppSelector(authSelector);

	return <div>{!success ? <Auth /> : <Home />}</div>;
};
