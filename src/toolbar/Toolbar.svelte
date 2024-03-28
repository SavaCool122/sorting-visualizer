<script>
	import Button from '../lib/ui/button/Button.svelte'
	import { cn } from '../lib/cn.js'
	import ModeSelect from './ModeSelect.svelte'
	import { createEventDispatcher } from 'svelte'
	import BarSettings from './bars/Settings.svelte'
	import ImageSettings from './image/Settings.svelte'
	const dispatch = createEventDispatcher()

	export let block
	export let mode
	export let size
	export let show

	const defaultClass =
		'absolute top-[-105px] z-10 h-[120px] w-1/2 rounded-3xl border-2 border-black bg-primary transition-[top] hover:top-4 peer-hover:top-4'
	const showClass = 'top-4'

	function startSort() {
		dispatch('sort')
	}
</script>

<div class="peer absolute top-0 h-8 w-1/2"></div>

<div class={cn(defaultClass, show && showClass)}>
	<div class="grid h-full grid-cols-3 place-content-center">
		{#if mode === 'bars'}
			<BarSettings {block} bind:size />
		{:else}
			<ImageSettings {block} />
		{/if}
		<div class="space-y-2">
			<ModeSelect bind:mode />

			<Button disabled={block} on:click={startSort}>
				SORT {show ? 'SELECTED' : 'ALL'}
			</Button>
		</div>
	</div>
</div>
