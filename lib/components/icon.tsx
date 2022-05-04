import React from "react";

interface Props {
	value: string;
	size?: number;
}
const Icon = ({ value, size = 20 }: Props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`}>
		<text x="0" y="14">
			{value}
		</text>
	</svg>
);

export default Icon;
