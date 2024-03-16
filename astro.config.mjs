import { defineConfig } from 'astro/config';
// import nodejs from '@astrojs/node';

import react from '@astrojs/react';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
	// output: 'hybrid',
	// adapter: nodejs({ mode: 'middleware' }),
	integrations: [react(), alpinejs({ entrypoint: '/src/entrypoint' })],
	redirects: {
		'/blog/': {
			status: 302,
			destination: '/blog/pages/1',
		},
	},
});
