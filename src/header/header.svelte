<script>
	import Icon from '../lib/components/icon.svelte'
	import RadioGroup from '../lib/components/radio-group.svelte'
	import ToggleButton from '../lib/components/toggle-button.svelte'

	let { mode = $bindable(), type = $bindable() } = $props()

	let opened = $state(false)

	const modeOptions = ['bar', 'grid', 'image']
	const typeOption = ['random', 'reversed', 'few-unique']
</script>

<div class="sticky top-0 z-10 border-b border-black/10 bg-white py-4">
	<div class="flex justify-between font-medium">
		<h1>Sorting Visualizer</h1>

		<div>
			<ToggleButton class="mr-1">Start</ToggleButton>

			<ToggleButton bind:value={opened}>
				More
				{#snippet icon()}
					<Icon size="14" name="close" class="ml-1 shrink-0" />
				{/snippet}
			</ToggleButton>
		</div>
	</div>

	{#if opened}
		<div class="grid grid-cols-3 gap-2 pt-3">
			<div>mode:</div>
			<RadioGroup bind:value={mode} options={modeOptions} />
			<div>type:</div>
			<RadioGroup bind:value={type} options={typeOption} />
		</div>
	{/if}
</div>
