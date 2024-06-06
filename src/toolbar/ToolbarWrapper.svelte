<script>
	import { cn } from '../lib/cn.js'

	let { show, children } = $props()

	const defaultClass = 'z-10 rounded-3xl border-2 border-black bg-primary'
	const desktopClass = 'md:h-[120px] md:w-1/2 md:top-[-105px] md:absolute md:p-0'
	const showClass = 'md:hover:top-4 md:peer-hover:top-4 transition-[top,bottom]'
	const showFromJsClass = 'md:top-4'
	const mobileClass = 'h-[150px] fixed bottom-[10px] w-[300px] p-4'
</script>

<div class="peer absolute top-0 grid h-8 w-1/2 place-content-center content-end">
	<span class="text-xs leading-none">▲ ▲ ▲</span>
</div>

<div class={cn(defaultClass, desktopClass, mobileClass, showClass, show && showFromJsClass)}>
	{@render children()}
</div>
