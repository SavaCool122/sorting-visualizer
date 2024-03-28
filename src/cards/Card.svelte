<script>
	import { cn } from '../lib/cn.js'

	export let sortType
	export let status

	const defaultClass =
		'relative grid h-full w-full place-content-center rounded-3xl border-2 border-black p-4 '
</script>

<div class={cn(defaultClass, status === 'selected' && 'border-dashed')}>
	{#if status === 'active'}
		<button
			on:click={() => (status = 'selected')}
			class="absolute inset-0 rounded-3xl bg-primary opacity-90"
		>
			{sortType} sort
		</button>
	{:else if status === 'selected'}
		<button
			on:click={() => (status = 'active')}
			class=" absolute inset-0 grid h-full w-full place-content-center rounded-3xl bg-secondary opacity-90"
		>
			{sortType} sort
		</button>
	{:else if status === 'done'}
		<div class="absolute inset-0 grid h-full w-full place-content-center rounded-3xl bg-success">
			DONE 🎉
		</div>
	{/if}

	<slot />

	<span class={cn('invisible mt-2 text-center', status === 'progress' && 'visible')}>
		{sortType} sort
	</span>
</div>
