<script>
	import { cn } from '../../lib/css/cn.js'
	import { Statuses } from '../../lib/constants.js'

	const { value = Statuses.ready } = $props()

	const variants = {
		[Statuses.ready]: 'bg-ready',
		[Statuses.in_progress]: 'bg-in-progress',
		[Statuses.done]: 'bg-done',
	}
</script>

<span class={cn('py-1/2 font-p2 rounded-xs px-1', variants[value])}>
	{value}
</span>
