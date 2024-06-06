<script>
	import { cn } from '../../cn.js'
	import { createRadioGroup, melt } from '@melt-ui/svelte'

	let { options = [], value = $bindable(), disabled = false } = $props()

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
		default: 'rounded-xl border-2 border-transparent p-4 opacity-70 text-2xl',
		disabled: 'disabled:bg-gray-400 disabled:border-transparent',
		focus: 'hover:border-black',
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
			class={cn(button.default, button.active, button.focus, button.disabled)}
		>
			{option.name}
		</button>
	{/each}
</div>
