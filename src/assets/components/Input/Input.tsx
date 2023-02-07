import { useMemo } from "react";
import type { ChangeEventHandler, FC } from "react";

import classes from "./Input.module.scss";
import clsx from "clsx";

export const SIZES = {
	long: classes.long,
	short: classes.short,
} as const;

export interface InputProps {
	size?: keyof typeof SIZES;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string | undefined;
	className?: string | undefined;
	type: string;
}

export interface InputComponent extends FC<InputProps> {}

export const Input: InputComponent = ({
	size = "short",
	value,
	onChange,
	placeholder,
	className,
	type,
}) => {
	const wrapperClassName = useMemo(
		() => clsx(classes.wrapper, SIZES[size], {}, className),
		[className, size]
	);

	return (
		<input
			className={wrapperClassName}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
