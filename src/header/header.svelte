<script>
	import Icon from '../lib/components/icon.svelte'
	import { ArrayTypes, Statuses } from '../lib/constants.js'
	import RadioGroup from './radio-group.svelte'
	import ToggleButton from './toggle-button.svelte'

	let { mode = $bindable(), type = $bindable(), status = $bindable() } = $props()

	let opened = $state(false)
	let started = $state(false)

	$effect(() => {
		if (started) status = Statuses.in_progress
	})

	const modeOptions = ['bar', 'grid'] // 'bar', 'grid', 'image'
	const typeOption = [...Object.keys(ArrayTypes)]
</script>

<div class="sticky top-0 z-10 border-b border-black/10 bg-white py-4">
	<div class="flex justify-between font-medium">
		<h1>Sorting Visualizer</h1>

		<div>
			<ToggleButton bind:value={started} class="mr-1" disabled={started}>
				{started ? 'In Progress' : 'Start'}
			</ToggleButton>

			<ToggleButton bind:value={opened}>
				More
				{#snippet icon()}
					<Icon size="14" name="close" class="ml-1 shrink-0" />
				{/snippet}
			</ToggleButton>
		</div>
	</div>

	{#if opened}
		<div class="grid max-w-fit grid-cols-4 gap-2 pt-3">
			<div>mode:</div>
			<div class="col-span-3">
				<RadioGroup bind:value={mode} options={modeOptions} />
			</div>
			<div>type:</div>
			<div class="col-span-3">
				<RadioGroup bind:value={type} options={typeOption} />
			</div>
		</div>
	{/if}
</div>
