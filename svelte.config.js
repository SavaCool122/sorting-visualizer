import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { preprocessMeltUI, sequence } from '@melt-ui/pp'
import { compile } from 'svelte/compiler'

export default {
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	compilerOptions: {
		runes: true,
	},
}
