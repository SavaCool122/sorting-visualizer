<script>
	import { cn } from '../css/cn.js'

	let { name, class: className, size = 16 } = $props()

	const symbolId = $derived(`/spritemap.svg#${name}`)
</script>

<svg width={size} height={size} class={cn('icon', className)}>
	<use xlink:href={symbolId}></use>
</svg>

<style>
	.icon {
		display: inline;
		use {
			fill: currentColor;
		}
	}
</style>
