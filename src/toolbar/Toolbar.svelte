<script>
	import ToolbarWrapper from './toolbar-wrapper.svelte'
	import ToolbarContent from './toolbar-content.svelte'

	let { block, mode = $bindable(), show, sort, options = $bindable() } = $props()
</script>

<ToolbarWrapper {show}>
	<ToolbarContent bind:options bind:mode {show} {block} {sort} />
</ToolbarWrapper>
