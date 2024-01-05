/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: ['md:flex-row-reverse'],
	theme: {
		extend: {
			fontFamily: {
				fira: ['Fira Code Variable'],
			},
			flex: {
				2: '2',
				3: '3',
				'1/2': '0 0 50%',
				'1/3': '0 0 33.333%',
			},
		},
	},

	plugins: [],
}
