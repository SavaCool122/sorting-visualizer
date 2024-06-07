<script>
	import { SORT_TYPE } from '../core/state/sort-type.js'
	import { STATUS } from '../core/state/status.js'
	import { cn } from '../lib/cn.js'

	let { sortType, status = $bindable(), children } = $props()

	const defaultClass =
		'relative grid h-full w-full place-content-center rounded-3xl border-2 border-black p-4 '
</script>

<div class={cn(defaultClass, status === STATUS.SELECTED && 'border-dashed')}>
	{#if status === STATUS.INITIAL}
		<button
			onclick={() => (status = STATUS.SELECTED)}
			class="absolute inset-0 rounded-3xl bg-primary opacity-90"
		>
			{sortType} sort
		</button>
	{:else if status === STATUS.SELECTED}
		<button
			onclick={() => (status = STATUS.INITIAL)}
			class=" absolute inset-0 grid h-full w-full place-content-center rounded-3xl bg-secondary opacity-90"
		>
			{sortType} sort
		</button>
	{:else if status === STATUS.DONE}
		<div class="absolute inset-0 grid h-full w-full place-content-center rounded-3xl bg-success">
			DONE 🎉
		</div>
	{/if}

	{@render children()}

	<span class={cn('invisible mt-2 text-center', status === STATUS.SORTING && 'visible')}>
		{sortType} sort
	</span>
</div>
