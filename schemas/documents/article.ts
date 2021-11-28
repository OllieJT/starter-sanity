import { withSlug } from "../common/slug";
import { HiDocumentText } from "react-icons/hi";

export default {
	title: "Article",
	name: "article",
	type: "document",
	icon: HiDocumentText,
	fieldsets: [
		{
			title: "Metadata",
			name: "metadata",
			options: { collapsible: true, collapsed: true },
		},
	],
	fields: [
		{
			title: "Title",
			document:
				"This title is only used on the site. For the title that appears on social media, see the metadata section.",
			name: "title",
			type: "string",
			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
		{
			title: "Article Image",
			type: "thumbnail",
			name: "thumbnail",
			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
		{
			title: "Content",
			name: "content",
			type: "richtext",
		},
		withSlug("title", "metadata"),

		{
			title: "Publish Date",
			description:
				"This will be available but hidden on the site until after this date.",
			name: "publishAt",
			type: "datetime",
			fieldset: "metadata",

			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
		{
			title: "Author",
			name: "author",
			type: "reference",
			to: [{ type: "person" }],
			fieldset: "metadata",

			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
		{
			title: "Collections",
			name: "collections",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "collection" }],
				},
			],
			fieldset: "metadata",

			validation: (Rule) => Rule.min(1).max(3),
			codegen: { required: true },
		},
	],
	preview: {
		select: {
			title: "title",
			headline: "metadata.headline",
			description: "metadata.description",
			media: "metadata.thumbnails[0]",
			author: "author.name",
			slug: "slug",
		},
		prepare({
			title,
			headline,
			author,
			description,
			media,
			slug = { current: "/no-slug" },
		}) {
			return {
				title: headline || title || "No Title",
				subtitle: author,
				description: description,
				media,
				slug: slug.current,
			};
		},
	},
};
