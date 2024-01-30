import { defineConfig } from 'astro/config';
// import nodejs from '@astrojs/node';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// output: 'hybrid',
	// adapter: nodejs({ mode: 'middleware' }),
	integrations: [react()],
	redirects: {
		'/blog/': {
			status: 302,
			destination: '/blog/pages/1',
		},
	},
});
