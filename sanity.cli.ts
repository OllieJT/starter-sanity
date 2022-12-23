import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
	api: {
		// TODO: Configure the project id and dataset
		projectId: '00000000',
		dataset: 'production',
	},
});
