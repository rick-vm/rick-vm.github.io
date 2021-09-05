module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'title': ['Lato Bold', 'monospace'],
			'paragraph': ['Lato', 'monospace'],
		},
		boxShadow: {
			'2md': '2px 2px 8px 1px rgba(0, 0, 0, 0.25)',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
