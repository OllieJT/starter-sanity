import { HiViewGridAdd } from "react-icons/hi";
import { FaHighlighter } from "react-icons/fa";
import { Mark } from "../../lib/components/element-mark";

export default {
	title: "Page Content",
	name: "content",
	type: "array",
	icon: HiViewGridAdd,
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
					{
						title: "Highlight",
						value: "mark",
						blockEditor: {
							icon: FaHighlighter,
							render: Mark,
						},
					},
				],
				annotations: [
					{ title: "Link to URL", type: "linkExternal" },
					{ title: "Tag another page", type: "linkInternal" },
				],
			},
		},

		// { type: "inline_book" },
		// { type: "inline_cta" },
		// { type: "inline_gallery" },
		// { type: "inline_highlight" },
		// { type: "inline_image" },
		// { type: "inline_people" },
		// { type: "inline_video" },
	],
	options: {
		editModal: "fullscreen",
	},
};
