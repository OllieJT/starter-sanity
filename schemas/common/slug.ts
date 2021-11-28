import { slugify } from "../../utility/slugify";

export function withSlug(source: string, fieldset?: string) {
	return {
		title: "URL Slug",
		description: "This determines the URL path for the page",
		name: "slug",
		type: "slug",
		options: {
			source,
			slugify: (input) => slugify(input),
		},
		fieldset,

		validation: (Rule) => Rule.required(),
		codegen: { required: true },
	};
}
