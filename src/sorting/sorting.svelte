<script>
	import Card from '../lib/components/card/card.svelte'
	import Status from '../lib/components/status-badge/status.svelte'
	import { SORT_LIST } from './constants.js'
	import Bars from './modes/bars/bars.svelte'
</script>

<div class="mt-4 mb-2 font-medium text-black/60">Selected Sorting</div>

<div class="grid grid-cols-2 gap-x-5">
	{#each SORT_LIST as sort}
		<Card {sort}>
			{#snippet status()}
				<Status />
			{/snippet}

			<Bars />
		</Card>
	{/each}
</div>
