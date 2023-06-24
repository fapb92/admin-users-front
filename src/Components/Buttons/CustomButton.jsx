import React from "react";
import { Link } from "react-router-dom";

export const CustomButton = ({ type = "submit", color, text, ...props }) => {
	const btnClasses = `bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 m-2 rounded`;
	if (type !== "link") {
		return (
			<button type={type} className={btnClasses} {...props}>
				{text}
			</button>
		);
	}
	return (
		<Link className={btnClasses} {...props}>
			{text}
		</Link>
	);
};
