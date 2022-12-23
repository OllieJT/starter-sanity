import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schema';

export default defineConfig({
	name: 'default',
	// TODO: Add a title for the CMS
	title: 'TODO',

	// TODO: Select a theme from https://themer.sanity.build
	// theme,

	// TODO: Configure the project id and dataset
	projectId: 'dratd9c0',
	dataset: 'production',

	plugins: [deskTool({ title: 'Content Management' }), visionTool({ title: 'Data Tool' })],

	schema: {
		types: schemaTypes,
	},
});
