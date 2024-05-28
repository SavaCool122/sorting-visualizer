<script>
	import { createEventDispatcher } from 'svelte'
	import ToolbarWrapper from './ToolbarWrapper.svelte'
	import ToolbarContent from './ToolbarContent.svelte'
	const dispatch = createEventDispatcher()

	export let block
	export let mode
	export let show

	function startSort() {
		dispatch('sort')
	}
</script>

<ToolbarWrapper {show}>
	<ToolbarContent bind:mode {show} {block} on:sort={startSort} />
</ToolbarWrapper>
