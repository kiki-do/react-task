import { useState } from "react";
import type { FC } from "react";
import classes from "./Star.module.scss";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { locationSelector } from "../../../store/locationSlice/selector";

export const Star: FC = () => {
	const [score] = useState(3);
	const location = useAppSelector(locationSelector);
	let number = 0;

	return (
		<div className={classes.wrapper}>
			<div className={classes.stars}>
				{[...Array(5)].map(() => {
					number += 1;
					return (
						<svg
							key={number}
							className={number <= score ? classes.on : classes.off}
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.65985 2.0156C7.19357 3.13043 6.62617 4.48741 6.39865 5.03227C6.17254 5.57565 5.98153 6.02601 5.98153 6.02601C5.98153 6.02601 5.54896 6.06293 5.0237 6.10279C4.49984 6.14266 3.54342 6.21501 2.89878 6.26374C2.25413 6.31395 1.37214 6.38039 0.939574 6.41288C0.507005 6.44536 0.117973 6.47637 0.0758401 6.4808L0 6.48966L0.0688178 6.55906C0.108142 6.59597 0.540712 7.00204 1.02946 7.46125C1.51961 7.92047 2.16144 8.52144 2.45638 8.79756C4.23581 10.4661 4.64731 10.8515 4.66416 10.8648C4.68804 10.884 4.76809 10.5281 3.90295 14.2093C3.54342 15.739 3.2527 17 3.2527 17C3.2527 17 4.47316 16.2632 5.96047 15.3507C7.44637 14.4381 8.67245 13.6939 8.68509 13.6969C8.69633 13.6998 9.24406 14.0542 9.89994 14.4824C10.5572 14.9121 11.5361 15.5515 12.0768 15.9044C12.6175 16.2573 13.2158 16.6486 13.4068 16.7726C13.5964 16.8981 13.7622 17 13.7622 17C13.7622 17 13.7678 16.9749 13.7622 16.9439C13.7537 16.8937 13.1849 14.1428 12.6723 11.6754C12.5501 11.0818 12.449 10.5857 12.449 10.5724C12.449 10.5532 13.3605 9.7411 16.6581 6.81894C17.0205 6.49852 17.0247 6.49409 16.9811 6.48375C16.9559 6.47785 15.5613 6.33019 13.8815 6.15447C12.2018 5.97876 10.8142 5.82963 10.7974 5.82224C10.7763 5.81338 10.7103 5.65834 10.5179 5.16368C10.3803 4.80635 9.93926 3.6679 9.53899 2.63282C9.13873 1.59773 8.74689 0.583315 8.66824 0.381023C8.58959 0.177254 8.52218 0.00744629 8.51656 6.29425e-05C8.51234 -0.00584412 8.12612 0.900782 7.65985 2.0156Z"
								fill="#6C6845"
							/>
							<path
								d="M7.65985 2.0156C7.19357 3.13043 6.62617 4.48741 6.39865 5.03227C6.17254 5.57565 5.98153 6.02601 5.98153 6.02601C5.98153 6.02601 5.54896 6.06293 5.0237 6.10279C4.49984 6.14266 3.54342 6.21501 2.89878 6.26374C2.25413 6.31395 1.37214 6.38039 0.939574 6.41288C0.507005 6.44536 0.117973 6.47637 0.0758401 6.4808L0 6.48966L0.0688178 6.55906C0.108142 6.59597 0.540712 7.00204 1.02946 7.46125C1.51961 7.92047 2.16144 8.52144 2.45638 8.79756C4.23581 10.4661 4.64731 10.8515 4.66416 10.8648C4.68804 10.884 4.76809 10.5281 3.90295 14.2093C3.54342 15.739 3.2527 17 3.2527 17C3.2527 17 4.47316 16.2632 5.96047 15.3507C7.44637 14.4381 8.67245 13.6939 8.68509 13.6969C8.69633 13.6998 9.24406 14.0542 9.89994 14.4824C10.5572 14.9121 11.5361 15.5515 12.0768 15.9044C12.6175 16.2573 13.2158 16.6486 13.4068 16.7726C13.5964 16.8981 13.7622 17 13.7622 17C13.7622 17 13.7678 16.9749 13.7622 16.9439C13.7537 16.8937 13.1849 14.1428 12.6723 11.6754C12.5501 11.0818 12.449 10.5857 12.449 10.5724C12.449 10.5532 13.3605 9.7411 16.6581 6.81894C17.0205 6.49852 17.0247 6.49409 16.9811 6.48375C16.9559 6.47785 15.5613 6.33019 13.8815 6.15447C12.2018 5.97876 10.8142 5.82963 10.7974 5.82224C10.7763 5.81338 10.7103 5.65834 10.5179 5.16368C10.3803 4.80635 9.93926 3.6679 9.53899 2.63282C9.13873 1.59773 8.74689 0.583315 8.66824 0.381023C8.58959 0.177254 8.52218 0.00744629 8.51656 6.29425e-05C8.51234 -0.00584412 8.12612 0.900782 7.65985 2.0156Z"
								fill="white"
								fillOpacity="0.6"
							/>
						</svg>
					);
				})}
			</div>
		</div>
	);
};
