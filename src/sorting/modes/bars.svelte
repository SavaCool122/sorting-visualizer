<script>
	import { flip } from 'svelte/animate'
	import { ANIMATION_SPEED_MS } from '../animations/constants.js'

	const { array, sortType } = $props()
</script>

{#each array as bar (bar)}
	<div
		animate:flip={{ duration: ANIMATION_SPEED_MS }}
		class="mb-1 h-3 w-full border border-black/20"
	>
		<div
			style={`width: ${bar}%`}
			class="flex h-full items-center justify-end border-r border-black/20 pr-0.5 text-[10px]"
		>
			{bar}
		</div>
	</div>
{/each}
