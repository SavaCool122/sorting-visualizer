<script>
	import Icon from '../lib/components/icon.svelte'
	import { ArrayTypes, Statuses } from '../lib/constants.js'
	import RadioGroup from './radio-group.svelte'
	import StartButton from './start-button.svelte'
	import ToggleButton from './toggle-button.svelte'

	let { mode = $bindable(), type = $bindable(), status = $bindable() } = $props()

	let opened = $state(false)

	$effect(() => {
		if (opened && status === Statuses.in_progress) opened = false
	})

	const modeOptions = ['bar'] // 'bar', 'grid', 'image'
	const typeOption = [...Object.keys(ArrayTypes)]
</script>

<div class="sticky top-0 z-10 border-b border-black/10 bg-white py-4">
	<div class="flex justify-between font-medium">
		<h1>Sorting Visualizer</h1>

		<div>
			<StartButton bind:status />

			<ToggleButton bind:value={opened} disabled={status === Statuses.in_progress}>
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
