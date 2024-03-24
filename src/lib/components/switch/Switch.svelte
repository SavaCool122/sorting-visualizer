<script>
	import { createEventDispatcher } from 'svelte'
	import { cn } from '../../cn.js'

	const dispatch = createEventDispatcher()

	export let height = 30
	export let width = 60
	export let paddings = 4
	let enable = true

	let circleSide = height - paddings
	let translate = width - height
	const defaultSwitchClasses =
		'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'
	const defaultCircleClasses =
		'pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'

	const handleClick = () => {
		enable = !enable
		dispatch('custom-change', enable)
	}
</script>

<button
	style={cn({
		height: `${height}px`,
		width: `${width}px`,
	})}
	class={cn(enable ? 'bg-primary' : 'bg-primary', defaultSwitchClasses)}
	role="switch"
	type="button"
	tabIndex="0"
	aria-checked={enable ? 'true' : 'false'}
	data-headlessui-state={enable && 'checked'}
	on:click={handleClick}
>
	<span
		style={cn({
			height: `${circleSide}px`,
			width: `${circleSide}px`,
			transform: enable ? `translateX(${translate}px)` : 'translateX(0)',
		})}
		aria-hidden="true"
		class={cn(defaultCircleClasses)}
	/>
</button>
