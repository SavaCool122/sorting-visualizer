<script>
	import { createRadioGroup, createSync, melt } from '@melt-ui/svelte'

	let { options, value = $bindable() } = $props()

	const {
		elements: { root, item, hiddenInput },
		states,
	} = createRadioGroup({
		defaultValue: 'default',
		orientation: 'horizontal',
		defaultValue: options[0],
	})

	const sync = createSync(states)

	$effect(() => sync.value(value, v => (value = v)))
</script>

<div use:melt={$root} class="flex gap-1">
	{#each options as option}
		<div class="flex items-center gap-3">
			<button use:melt={$item(option)} id={option} class="data-[state=checked]:underline">
				{option}
			</button>
		</div>
	{/each}
	<input use:melt={$hiddenInput} />
</div>
