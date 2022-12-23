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
			of: [
				defineField({
					title: 'Image',
					name: 'img',
					type: 'image',
					options: {
						hotspot: true,
						storeOriginalFilename: false,
					},
					fields: [
						{
							title: 'Accesible Description',
							description: "Describe what is in this image for someone who can't see it",
							name: 'alt',
							type: 'string',
							options: {isHighlighted: true},
						},
					],
				}),
			],
		}),
	],
});
