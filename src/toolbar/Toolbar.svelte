<script>
	import ToolbarWrapper from './ToolbarWrapper.svelte'
	import ToolbarContent from './ToolbarContent.svelte'

	let { block, mode = $bindable(), show, sort } = $props()
</script>

<ToolbarWrapper show={true}>
	<ToolbarContent bind:mode {show} {block} {sort} />
</ToolbarWrapper>
