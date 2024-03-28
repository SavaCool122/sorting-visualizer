<script>
	import { cn } from '../../cn.js'
	export let disabled = false

	const defaultClass = 'w-full rounded-lg border-2 border-black bg-secondary px-4 py-2 text-2xl'
	const disabledClass = 'disabled:bg-gray-400'
</script>

<button {disabled} class={cn(defaultClass, $$props.class, disabledClass)} on:click>
	<slot />
</button>
