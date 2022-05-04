import { HiMenuAlt1, HiViewGridAdd } from "react-icons/hi";
import { FaHighlighter } from "react-icons/fa";
import { Mark } from "../../lib/components/element-mark";
import { linkFields } from "./links";

// Fields

const decorator = {
	strong: { title: "Strong", value: "strong" },
	em: { title: "Italic", value: "em" },
	mark: {
		title: "Highlight",
		value: "mark",
		blockEditor: {
			icon: FaHighlighter,
			render: Mark,
		},
	},
};

const list = {
	bullet: { title: "Bullet", value: "bullet" },
	number: { title: "Number", value: "number" },
};

const style = {
	normal: { title: "Normal", value: "normal" },
	h1: { title: "H1", value: "h1" },
	h2: { title: "H2", value: "h2" },
	h3: { title: "H3", value: "h3" },
	h4: { title: "H4", value: "h4" },
	h5: { title: "H5", value: "h5" },
	h6: { title: "H6", value: "h6" },
	blockquote: { title: "Quote", value: "blockquote" },
};

// Schema

const content = {
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
				style.normal,
				style.h1,
				style.h2,
				style.h3,
				style.h4,
				style.h5,
				style.h6,
				style.blockquote,
			],
			lists: [list.bullet, list.number],
			marks: {
				decorators: [decorator.strong, decorator.em, decorator.mark],
				annotations: [...linkFields],
			},
		},

		// { type: "some_field" },
	],
	options: {
		editModal: "fullscreen",
	},
};

const richtext = {
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
				style.normal,
				style.h1,
				style.h2,
				style.h3,
				style.h4,
				style.h5,
				style.h6,
				style.blockquote,
			],
			lists: [list.bullet, list.number],
			marks: {
				decorators: [decorator.strong, decorator.em, decorator.mark],
				annotations: [...linkFields],
			},
		},
	],
	options: {
		editModal: "dialog",
	},
};

export default [content, richtext];
