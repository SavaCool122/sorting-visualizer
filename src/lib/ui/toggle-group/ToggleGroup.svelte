<script>
	import { cn } from '../../cn.js'
	import { createRadioGroup, melt } from '@melt-ui/svelte'

	export let defaultValue = undefined
	export let options = []
	export let value
	export let disabled = false

	$: value = $state

	const {
		elements: { root, item },
		states: { value: state },
	} = createRadioGroup({
		defaultValue: defaultValue,
	})

	const button = {
		default: 'rounded-lg border-2 border-black bg-secondary px-4 py-1 opacity-70',
		disabled: 'disabled:bg-gray-400',
		pressed: 'aria-checked:opacity-100',
	}
</script>

<div use:melt={$root} class="flex justify-center gap-2">
	{#each options as option}
		<button
			use:melt={$item(option.name)}
			disabled={option.disabled || disabled || false}
			class={cn(button.default, button.disabled, button.pressed)}
		>
			{option.name}
		</button>
	{/each}
</div>
