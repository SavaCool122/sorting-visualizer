<script>
	import Button from '../../lib/ui/button/Button.svelte'
	import ToggleGroup from '../../lib/ui/toggle-group/ToggleGroup.svelte'

	let value = '1'
	export let block

	const options = [
		{
			name: '1',
		},
		{
			name: '2',
		},
		{
			name: '3',
		},
	]
</script>

<div>
	<ToggleGroup disabled={block} bind:value {options} defaultValue="1" />

	<div class="mt-2 flex justify-center">
		<Button disabled={block} class="w-max text-sm">
			<span>Upload image</span>
			<br />
			<span>(400×400)</span>
		</Button>
	</div>
</div>
