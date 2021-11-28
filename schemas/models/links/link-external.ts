import { HiExternalLink } from "react-icons/hi";

export default {
	title: "Link to URL",
	name: "linkExternal",
	description: "Link to a page on another website",
	type: "object",
	icon: HiExternalLink,
	fields: [
		{
			title: "URL",
			name: "url",
			type: "url",
			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
	],
};