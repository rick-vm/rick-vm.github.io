module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'title': ['Lato Bold', 'monospace'],
			'paragraph': ['Lato', 'monospace'],
		},
		boxShadow: {
			'md': '3px 3px 6px -4px rgba(0, 0, 0, 0.25)',
			'lg': '5px 5px 8px -3px rgba(0, 0, 0, 0.35)',
			'2lg': '6px 6px 10px -5px rgba(0, 0, 0, 0.15)',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
