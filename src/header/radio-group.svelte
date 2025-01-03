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

<span use:melt={$root} class="inline-flex gap-1">
	{#each options as option}
		<span class="inline-flex items-center gap-3">
			<button
				use:melt={$item(option)}
				id={option}
				class="cursor-pointer data-[state=checked]:underline"
			>
				{option}
			</button>
		</span>
	{/each}
	<input use:melt={$hiddenInput} />
</span>
