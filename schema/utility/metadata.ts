import { defineField, defineType } from 'sanity';

export const metadata = defineType({
	title: 'OpenGraph',
	description: 'These metadata fields are used for SEO and social media previews',
	name: 'og',
	type: 'object',
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Images',
			name: 'images',
			type: 'array',
			of: [{ type: 'img' }],
		}),
	],
});
