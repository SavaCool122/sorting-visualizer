<script>
	import RadioGroup from './radio-group.svelte'

	let { mode = $bindable(), type = $bindable(), typeOptions, modeOptions } = $props()
</script>

<span class="mr-1 hidden gap-2 sm:inline-flex">
	<span>
		<span class="mr-1">mode:</span>
		<span>
			<RadioGroup bind:value={mode} options={modeOptions} />
		</span>
	</span>
	<span>
		<span class="mr-1">type:</span>
		<span>
			<RadioGroup bind:value={type} options={typeOptions} />
		</span>
	</span>
</span>
