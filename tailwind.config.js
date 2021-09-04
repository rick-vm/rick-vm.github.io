module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'paragraph': ['Lato', 'monospace'],
		},
		boxShadow: {
			'2md': '3px 3px 7px 3px rgba(0, 0, 0, 0.5)',
		},
		dropShadow: {
			'2md': '3px 3px 7px rgba(0, 0, 0, 0.5)',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
