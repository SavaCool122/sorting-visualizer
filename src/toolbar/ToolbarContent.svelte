<script>
	import { createEventDispatcher } from 'svelte'
	import ModeSelect from './ModeSelect.svelte'
	import Button from '../lib/ui/button/Button.svelte'
	const dispatch = createEventDispatcher()

	export let show
	export let block
	export let mode

	function startSort() {
		dispatch('sort')
	}
</script>

<div class="grid h-full w-full gap-4 md:flex md:p-8">
	<ModeSelect bind:mode />

	<div class="mx-4 h-full w-[1px] border-r-2 border-black"></div>

	<Button disabled={block} on:click={startSort}>
		SORT {show ? 'SELECTED' : 'ALL'}
	</Button>
</div>
