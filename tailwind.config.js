/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				'primary-dark': 'var(--primary-dark)',
				'primary-light': 'var(--primary-light)',
			},
		},
	},
	plugins: [],
}
