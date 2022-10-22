/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: ['md:flex-row-reverse'],
	theme: {
		extend: {
			flex: {
				"2": "2",
				"1/3": "0 0 33.333%"
			}
		},
	},
	
	plugins: [],
}
