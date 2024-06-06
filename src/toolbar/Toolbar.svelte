<svelte:options runes={true} />

<script>
	import ToolbarWrapper from './ToolbarWrapper.svelte'
	import ToolbarContent from './ToolbarContent.svelte'

	let { block, mode = $bindable(), show, sort } = $props()
</script>

<ToolbarWrapper {show}>
	<ToolbarContent bind:mode {show} {block} {sort} />
</ToolbarWrapper>
