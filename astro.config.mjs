import { defineConfig } from 'astro/config';
// import nodejs from '@astrojs/node';

import react from '@astrojs/react';

import pandacss from '@pandacss/dev/astro';

// https://astro.build/config
export default defineConfig({
	// output: 'hybrid',
	// adapter: nodejs({ mode: 'middleware' }),
	integrations: [react(), pandacss()],
	redirects: {
		'/blog/': {
			status: 302,
			destination: '/blog/pages/1',
		},
	},
});
