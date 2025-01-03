<script>
	import Icon from '../lib/components/icon.svelte'
	import { ArrayTypes, Statuses } from '../lib/constants.js'
	import DesktopControls from './desktop-controls.svelte'
	import MobileControls from './mobile-controls.svelte'
	import RadioGroup from './radio-group.svelte'
	import StartButton from './start-button.svelte'
	import ToggleButton from './toggle-button.svelte'

	let { mode = $bindable(), type = $bindable(), status = $bindable() } = $props()

	let opened = $state(false)

	$effect(() => {
		if (opened && status === Statuses.in_progress) opened = false
	})

	const modeOptions = ['bar'] // 'bar', 'grid', 'image'
	const typeOptions = [...Object.keys(ArrayTypes)]
</script>

<div class="sticky top-0 z-10 border-b border-black/10 bg-white py-4">
	<div class="flex justify-between">
		<div>Sorting Visualizer</div>

		<div>
			<StartButton bind:status />

			{#if opened}
				<DesktopControls bind:mode bind:type {modeOptions} {typeOptions} />
			{/if}

			<ToggleButton bind:value={opened} disabled={status === Statuses.in_progress}>
				More
				{#snippet icon()}
					<Icon size="14" name="close" class="ml-1 shrink-0" />
				{/snippet}
			</ToggleButton>
		</div>
	</div>

	{#if opened}
		<MobileControls bind:mode bind:type {modeOptions} {typeOptions} />
	{/if}
</div>
