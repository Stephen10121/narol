import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	server: {
		allowedHosts: [ "narolhvac.com" ]
	},
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit()
	]
});
