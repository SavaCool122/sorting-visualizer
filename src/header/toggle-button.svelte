<script>
	import { createSync, createToggle, melt } from '@melt-ui/svelte'
	import { cn } from '../lib/css/cn.js'

	let { class: className, children, value = $bindable(), icon, disabled } = $props()

	const {
		elements: { root },
		states,
	} = createToggle()

	const sync = createSync(states)

	$effect(() => sync.pressed(value, pressed => (value = pressed)))
</script>

<button use:melt={$root} class={cn('cursor-pointer disabled:line-through', className)} {disabled}>
	<div class="flex items-center">
		{@render children()}

		{#if value}
			{@render icon?.()}
		{/if}
	</div>
</button>
