import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, customStyles, handleClick, title }) => {
	const snap = useSnapshot(state);
	const generateStyle = (type) => {
		if (type === "filled") {
			return {
				backgroundColor: snap.color,
				color: getContrastingColor(snap.color),
			};
		} else if (type === "outline") {
			return {
				border: `1px solid ${snap.color}`,
				color: snap.color,
			};
		}
	};
	return (
		<button
			className={`${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{title}
		</button>
	);
};

export default CustomButton;
