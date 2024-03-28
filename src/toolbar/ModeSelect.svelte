<script>
	import Button from '../lib/ui/button/Button.svelte'
	import { createRadioGroup, melt } from '@melt-ui/svelte'
	import { cn } from '../lib/cn.js'

	export let mode

	$: mode = $value

	const button = {
		default: 'rounded-lg border-2 border-black bg-secondary px-4 py-1 opacity-70',
		disabled: 'disabled:bg-gray-400',
		pressed: 'aria-checked:opacity-100',
	}

	const {
		elements: { root, item },
		states: { value },
	} = createRadioGroup({
		defaultValue: 'bars',
	})
</script>

<div use:melt={$root} class="flex justify-center gap-2">
	<button use:melt={$item('bars')} class={cn(button.default, button.disabled, button.pressed)}>
		bars
	</button>
	<button use:melt={$item('image')} class={cn(button.default, button.disabled, button.pressed)}>
		image
	</button>
	<button
		use:melt={$item('circle')}
		disabled
		class={cn(button.default, button.disabled, button.pressed)}
	>
		circle
	</button>
</div>
