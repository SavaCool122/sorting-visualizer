<script>
	import ToolbarWrapper from './ToolbarWrapper.svelte'
	import ToolbarContent from './ToolbarContent.svelte'

	let { block, mode = $bindable(), show, sort, options = $bindable() } = $props()
</script>

<ToolbarWrapper {show}>
	<ToolbarContent bind:options bind:mode {show} {block} {sort} />
</ToolbarWrapper>
