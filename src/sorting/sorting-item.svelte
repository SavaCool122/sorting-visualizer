<script>
	import { Statuses } from '../lib/constants.js'
	import Card from './card.svelte'
	import Status from './status-badge/status.svelte'
	import Bars from './modes/bars.svelte'
	import { animate } from './animations/start-animation.js'
	import { recordSwaps } from './record-swaps.js'

	let { array: initialArray, globalSortStatus, sortStatus = $bindable(), sortType } = $props()

	let array = $state([])

	$effect(() => (array = [...initialArray]))

	$effect(() => {
		if (globalSortStatus === Statuses.in_progress && sortStatus === Statuses.ready) runSorting()
	})

	async function runSorting() {
		sortStatus = Statuses.in_progress

		const animations = recordSwaps(sortType, initialArray)
		await animate(animations, newArray => (array = newArray))

		sortStatus = Statuses.done
	}
</script>

<Card title={sortType}>
	{#snippet status()}
		<Status value={sortStatus} />
	{/snippet}

	<Bars {array} {sortType} />
</Card>
