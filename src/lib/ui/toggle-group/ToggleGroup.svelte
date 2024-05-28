<script>
	import { cn } from '../../cn.js'
	import { createRadioGroup, melt } from '@melt-ui/svelte'

	export let options = []
	export let value
	export let disabled = false

	$: value = $state

	const {
		elements: { root, item },
		states: { value: state },
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
