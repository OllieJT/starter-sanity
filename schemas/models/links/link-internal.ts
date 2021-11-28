import { HiTag } from "react-icons/hi";

export default {
	title: "Tag another page",
	description: "Link to something on this website.",
	name: "linkInternal",
	type: "object",
	icon: HiTag,
	fields: [
		{
			title: "Reference",
			name: "reference",
			type: "reference",
			weak: true,
			to: [{ type: "article" }, { type: "collection" }, { type: "person" }],
			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
	],
};
