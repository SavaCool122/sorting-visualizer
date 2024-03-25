<script>
	import Bar from './Bar.svelte'
	import { cn } from '../../lib/cn.js'

	export let list
	export let sortType
	let status = 'active' // active | progress | done | selected
	const defaultClass =
		'relative grid h-full w-full place-content-center rounded-3xl border-2 border-black p-4'
</script>

<div class={cn(defaultClass, status === 'selected' && 'text-success ')}>
	<div class="inline-flex max-w-min items-end justify-center gap-1">
		{#each list as number}
			<Bar {number} />
			{#if status === 'active'}
				<button
					on:click={() => (status = 'progress')}
					class="absolute inset-0 rounded-3xl bg-primary opacity-[0.11]"
				>
					{sortType} sort
				</button>
			{:else if status === 'done'}
				<div
					class="bg-success absolute inset-0 grid h-full w-full place-content-center rounded-3xl"
				>
					DONE 🎉
				</div>
			{:else if status === 'selected'}
				<div
					class="absolute inset-0 grid h-full w-full place-content-center rounded-3xl bg-primary opacity-[0.11]"
				>
					{sortType} sort
				</div>
			{/if}
		{/each}
	</div>
</div>
