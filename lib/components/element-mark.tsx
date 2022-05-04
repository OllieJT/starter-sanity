import React from "react";

export const Mark = (props) => {
	console.log({ marker: props });
	return (
		<mark style={{ backgroundColor: "yellow", color: "black" }}>
			{props.children}
		</mark>
	);
};
