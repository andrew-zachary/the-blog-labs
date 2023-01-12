/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		maxWidth: {
			'xs': '32rem',
			'sm': '48rem',
			'md': '76.8rem',
			'lg': '99.2rem'
		},
		extend: {},
	},
	plugins: [],
}
