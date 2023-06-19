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
		extend: {
			maxWidth: {
				//menu-mobile-logo
				'mml': '18rem',
				//menu-mobile-feature-btn
				'mmfb': '3rem'
			},
			gridTemplateRows: {
				//menu-mobile-rows
				'mmr': 'repeat(2, min-content)',
				//menu-tablet-rows
				'mtr': '1fr'
			},
			gridTemplateColumns: {
				//menu-mobile-columns
				'mmc': 'max-content 1fr max-content',
				//menu-tablet-columns
				'mtc': 'max-content 1fr max-content'
			},
			transitionProperty: {
				'height': 'height',
			}
		},
	},
	plugins: [],
}
