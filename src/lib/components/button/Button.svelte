<script>
	import { cn } from '../../cn.js'
	export let disabled
</script>

<button
	class={cn(`sv-button rounded-[11px] p-2 bg-primary-light ${$$props.class}`, {
		'bg-gray-400 text-white cursor-not-allowed': disabled,
		'text-primary': !disabled,
	})}
	{disabled}
	on:click
>
	<slot />
</button>
