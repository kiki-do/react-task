import type { FC } from "react";

import { AuthForm } from "../../components/AuthForm/AuthForm";

import classes from "./Auth.module.scss";

export const Auth: FC = () => {
	return (
		<div className={classes.wrapper}>
			<AuthForm />
		</div>
	);
};
