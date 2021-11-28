import React from "react";

export const Marker = (props) => {
	console.log({ marker: props });
	return <span style={{ backgroundColor: "yellow", color: "black" }}>{props.children}</span>;
};
