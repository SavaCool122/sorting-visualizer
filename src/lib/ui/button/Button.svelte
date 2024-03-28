<script>
	import { cn } from '../../cn.js'
	export let disabled = false

	const defaultClass = 'w-full rounded-lg border-2 border-black bg-secondary px-4 py-2 text-2xl'
</script>

<button {disabled} class={cn(defaultClass, $$props.class)} on:click>
	<slot />
</button>
