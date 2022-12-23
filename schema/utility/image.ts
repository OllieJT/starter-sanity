import { defineField } from 'sanity';

export const img = defineField({
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
			options: { isHighlighted: true },
		},
	],
});
