import { withSlug } from "../common/with-slug";
import { HiFolder } from "react-icons/hi";

export default {
	title: "Collection",
	name: "collection",
	type: "document",
	icon: HiFolder,
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
		{
			title: "Description",
			name: "description",
			type: "text",
		},
		withSlug({ source: "title" }),
	],
	preview: {
		select: {
			title: "title",
			description: "metadata.description",
			media: "metadata.thumbnails[0]",
			slug: "slug",
		},
		prepare({
			title = "No Title",
			description,
			media,
			slug = { current: "/no-slug" },
		}) {
			return {
				title,
				description,
				media,
				slug: slug.current,
			};
		},
	},
};
