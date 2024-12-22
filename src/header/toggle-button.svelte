<script>
	import { createSync, createToggle, melt } from '@melt-ui/svelte'
	import { cn } from '../lib/css/cn.js'

	let { class: className, children, value = $bindable(), icon, disabled } = $props()

	const {
		elements: { root },
		states,
	} = createToggle({
		disabled,
	})

	const sync = createSync(states)

	$effect(() => sync.pressed(value, pressed => (value = pressed)))
</script>

<button use:melt={$root} class={cn('disabled:line-through', className)}>
	<div class="flex items-center">
		{@render children()}

		{#if value}
			{@render icon?.()}
		{/if}
	</div>
</button>
