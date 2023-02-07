import { useState } from "react";
import type { FC, ChangeEvent } from "react";
import { Button } from "../../assets/components/Button/Button";

import classes from "./AuthForm.module.scss";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setSuccess } from "../../store/authSlice/slice";
import { Input } from "../../assets/components/Input/Input";

export const AuthForm: FC = () => {
	const [name, setName] = useState<string>("");
	const [pass, setPass] = useState<string>("");

	const [errorLogin, setErrorLogin] = useState<string>("");
	const [errorPassword, setErrorPassword] = useState<string>("");
	const [validLogin, setValidLogin] = useState<boolean>(false);
	const [validPassword, setValidPassword] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	const onChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
		const regNameValidate =
			/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
		if (!regNameValidate.test(String(event.target.value).toLowerCase())) {
			setValidLogin(false);
		} else {
			setErrorLogin("");
			setValidLogin(true);
		}
	};

	const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPass(event.target.value);
		const regNameValidate = /[0-9a-zA-Z!@#$%^&*]{8,}/u;
		if (!regNameValidate.test(String(event.target.value).toLowerCase())) {
			setValidLogin(false);
		} else {
			setErrorPassword("");
			setValidPassword(true);
		}
	};

	const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validLogin && validPassword) {
			dispatch(setSuccess(true));
		} else {
			setErrorLogin("Неправильно введен логин!");
			setErrorPassword("Неправильно введен пароль!");
		}
	};

	return (
		<form onSubmit={handleSubmit} className={classes.wrapper}>
			<h2 className={classes.title}>Simple Hotel Check</h2>
			<div className={classes.login}>
				<span className={errorLogin ? classes.error : ""}>Логин</span>
				<Input
					size="long"
					value={name}
					onChange={onChangeLogin}
					className={errorLogin ? classes.error : classes.input}
					type="text"
				/>
				{errorLogin && <div className={classes.validate}>{errorLogin}</div>}
			</div>

			<div className={classes.password}>
				<span>Пароль</span>
				<Input
					size="long"
					value={pass}
					onChange={onChangePassword}
					className={classes.input}
					type="password"
				/>
				{errorPassword && (
					<div className={classes.validate}>{errorPassword}</div>
				)}
			</div>
			<Button size="long" className={classes.button}>
				Войти
			</Button>
		</form>
	);
};
