import { svgSpritemap as svg } from 'vite-plugin-svg-spritemap'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [svg({ pattern: 'icons/*.svg' }), tailwindcss(), svelte()],
})
