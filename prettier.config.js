export default {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	arrowParens: 'avoid',
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
