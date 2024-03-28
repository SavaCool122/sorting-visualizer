<script>
	import { cn } from '../../cn.js'
	export let disabled = false
</script>

<button
	class={cn(`sv-button rounded-[11px] bg-primary p-2 ${$$props.class}`, {
		'cursor-not-allowed bg-gray-400 text-white': disabled,
		'text-primary': !disabled,
	})}
	{disabled}
	on:click
>
	<slot />
</button>
