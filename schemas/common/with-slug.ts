import { slugify } from "../../lib/utility/slugify";

interface Props {
	source: string;
	fieldset?: string;
}

export function withSlug({ source, fieldset }: Props) {
	return {
		title: "URL Slug",
		description: "This determines the URL path for the page",
		name: "slug",
		type: "slug",
		options: {
			source,
			slugify,
		},
		fieldset,

		readOnly: ({ document }) => !document?.publishedOnce,

		validation: (Rule) => Rule.required(),
		codegen: { required: true },
	};
}
