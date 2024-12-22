<script>
	import { cn } from '../../css/cn.js'
	import { STATUS } from './constants.js'

	const { value = STATUS.READY } = $props()
	const variants = {
		[STATUS.READY]: 'bg-ready',
		[STATUS.IN_PROGRESS]: 'bg-in-progress',
		[STATUS.DONE]: 'bg-done',
	}
</script>

<span class={cn('py-1/2 px-1rounded-xs text-xs', variants[value])}>
	{value}
</span>
