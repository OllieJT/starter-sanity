import { HiOutlinePhotograph } from "react-icons/hi";
import { alternateText } from "../../common";

export default {
	title: "Image",
	name: "thumbnail",
	type: "image",
	icon: HiOutlinePhotograph,
	fields: [alternateText],

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
