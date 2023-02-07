import { useState, useRef, useEffect } from "react";
import type { FC, MutableRefObject, RefObject } from "react";
import { motion } from "framer-motion";
import classes from "./Carousel.module.scss";
import images from "../../images";

export const Carousel: FC = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef() as MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		console.log(carousel.current?.scrollWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<motion.div
			ref={carousel as RefObject<HTMLInputElement>}
			className={classes.wrapper}
		>
			<motion.div
				drag="x"
				dragConstraints={{ right: 0, left: -width }}
				className={classes.inner}
			>
				{images.map(image => (
					<motion.div className={classes.item} key={image}>
						<img src={image} alt="" />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};
