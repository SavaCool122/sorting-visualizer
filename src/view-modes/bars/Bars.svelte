<script>
	export let list
	export let sortType
	let status = 'active' // active | progress | done | selected
</script>

<div class="relative grid h-full w-full place-content-center rounded-3xl border-2 border-black p-4">
	<div class="inline-flex max-w-min items-end justify-center gap-1">
		{#each list as number}
			<div
				style={`height: ${number}px`}
				class="w-4 flex-grow-0 rounded-t-lg border border-black bg-primary"
			></div>
			{#if status === 'active'}
				<button
					on:click={() => (status = 'progress')}
					class="absolute inset-0 rounded-3xl bg-primary opacity-[0.11]"
				>
					{sortType} sort
				</button>
			{:else if status === 'done'}
				<div
					class="bg-success absolute inset-0 grid h-full w-full place-content-center rounded-3xl opacity-[0.11]"
				>
					DONE 🎉
				</div>
			{/if}
		{/each}
	</div>
</div>
