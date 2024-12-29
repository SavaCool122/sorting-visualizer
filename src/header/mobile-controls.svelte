<script>
	import RadioGroup from './radio-group.svelte'

	let { mode = $bindable(), type = $bindable(), typeOptions, modeOptions } = $props()
</script>

<div class="grid max-w-fit grid-cols-4 gap-2 pt-3 sm:hidden">
	<div>mode:</div>
	<div class="col-span-3">
		<RadioGroup bind:value={mode} options={modeOptions} />
	</div>
	<div>type:</div>
	<div class="col-span-3">
		<RadioGroup bind:value={type} options={typeOptions} />
	</div>
</div>
