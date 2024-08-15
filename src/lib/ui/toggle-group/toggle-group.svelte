
<script>
	import { cn } from '../../cn.js'
	import { createRadioGroup, melt } from '@melt-ui/svelte'

	let { options = [], value = $bindable(), disabled = false, ...rest } = $props()

	$effect(() => {
		value = $radioState
	})

	const {
		elements: { root, item },
		states: { value: radioState },
	} = createRadioGroup({
		orientation: 'horizontal',
		defaultValue: value,
	})

	const button = {
		default: 'w-full rounded-lg border-2 border-black bg-secondary px-4 py-2 text-2xl opacity-50',
		disabled: 'disabled:bg-gray-400 disabled:opacity-100',
		active: 'aria-checked:opacity-100 aria-checked:border-black',
	}
</script>

<div use:melt={$root} class="flex gap-2">
	{#each options as option}
		<button
			use:melt={$item({ value: option.name, disabled: option.disabled || disabled })}
			disabled={option.disabled}
			id={option.name}
			aria-labelledby="{option.name}-label"
			class={cn(button.default, button.active, button.focus, rest.class, button.disabled)}
		>
			{option.name}
		</button>
	{/each}
</div>
