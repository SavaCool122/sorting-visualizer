<script>
	import { STATUS } from '../core/status.js'
	import { cn } from '../lib/cn.js'

	let { sortType, status = $bindable(), children } = $props()

	const defaultClass =
		'relative grid h-full w-full place-content-center rounded-3xl border-2 border-black p-4 '
</script>

<div class={cn(defaultClass, status === 'selected' && 'border-dashed')}>
	{#if status === STATUS.INITIAL}
		<button
			onclick={() => (status = 'selected')}
			class="absolute inset-0 rounded-3xl bg-primary opacity-90"
		>
			{sortType} sort
		</button>
	{:else if status === 'selected'}
		<button
			onclick={() => (status = STATUS.INITIAL)}
			class=" absolute inset-0 grid h-full w-full place-content-center rounded-3xl bg-secondary opacity-90"
		>
			{sortType} sort
		</button>
	{:else if status === 'done'}
		<div class="absolute inset-0 grid h-full w-full place-content-center rounded-3xl bg-success">
			DONE 🎉
		</div>
	{/if}

	{@render children()}

	<span class={cn('invisible mt-2 text-center', status === 'progress' && 'visible')}>
		{sortType} sort
	</span>
</div>
