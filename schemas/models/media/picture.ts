import { HiPhotograph } from "react-icons/hi";
import { alternateText } from "../../common/image";

export default {
	title: "Image",
	name: "picture",
	type: "image",
	icon: HiPhotograph,
	fields: [
		alternateText,
		/*
			{
				title: "Inline",
				name: "float",
				type: "string",
				options: {
					isHighlighted: true,
					list: [
						{
							title: "Fullwidth / Center",
							value: "none",
						},
						{
							title: "Left of text",
							value: "left",
						},
						{
							title: "Right of text",
							value: "right",
						},
					],
				},
			},
		*/
		/*
			{
				title: "Max Width",
				description:
					"Restrict the width of the image. This is useful if you want to force a larger image to sit inline next to text.",
				name: "maxWidth",
				type: "string",
				options: {
					isHighlighted: true,
					list: [
						{
							title: "None (Default)",
							value: "none",
						},
						{
							title: "Large (About 50%)",
							value: "large",
						},
						{
							title: "Medium (About 25%)",
							value: "medium",
						},
						{
							title: "Small (About 15%)",
							value: "small",
						},
					],
				},
			},
		*/
	],

	options: {
		hotspot: true,
		storeOriginalFilename: true,
	},

	preview: {
		select: {
			title: "asset.title",
			subtitle: "asset.alt",
			asset: "asset",
		},
		prepare(props) {
			// console.log(props);
			return {
				title: props.title,
				subtitle: props.subtitle,
				media: {
					_type: "img",
					asset: props.asset,
				},
			};
		},
	},
};
