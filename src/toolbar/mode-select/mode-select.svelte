<script lang="ts">
	import { createRadioGroup, melt } from '@melt-ui/svelte'

	let { mode = $bindable(), options, disabled: isAllDisabled = false } = $props()

	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked },
		states: { value },
	} = createRadioGroup({
		defaultValue: options[0].value,
		orientation: 'horizontal',
	})

	$effect(() => (mode = $value))
</script>

<div use:melt={$root} class="inline-flex gap-2 p-0.5 rounded-xl">
	{#each options as option}
		<button
			use:melt={$item(option)}
			class="min-w-[100px] border-2 border-transparent bg-secondary rounded-xl py-1 px-2 opacity-50 disabled:bg-transparent disabled:border-black aria-checked:opacity-100 aria-checked:border-black"
		>
			{option.value}
		</button>
	{/each}
</div>
