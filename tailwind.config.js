module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				'primary-dark': 'var(--primary-dark)',
				'primary-light': 'var(--primary-light)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
