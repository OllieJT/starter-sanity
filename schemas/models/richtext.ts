import { HiMenuAlt1 } from "react-icons/hi";
import { linkFields } from "./links";

export default {
	title: "Rich Text",
	name: "richtext",
	type: "array",
	icon: HiMenuAlt1,
	of: [
		{
			title: "Block",
			name: "block",
			type: "block",
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "H5", value: "h5" },
				{ title: "H6", value: "h6" },
				//{ title: "Quote", value: "blockquote" },
			],
			lists: [
				{ title: "Bullet", value: "bullet" },
				{ title: "Number", value: "number" },
			],
			marks: {
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Italic", value: "em" },
					{ title: "Highlight", value: "mark" },
				],
				annotations: [...linkFields],
			},
		},
	],
	options: {
		editModal: "dialog",
	},
};
