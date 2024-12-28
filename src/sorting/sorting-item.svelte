<script>
	import { Statuses } from '../lib/constants.js'
	import Card from './card.svelte'
	import Status from './status-badge/status.svelte'
	import Bars from './modes/bars.svelte'
	import { animate } from './animations/start-animation.js'
	import { swap } from './array-utils/swap.js'
	import { recordSwaps } from './record-swaps.js'

	let { array: initialArray, sortStatus = $bindable(), sortType } = $props()

	let array = $state([...initialArray])
	let sortStarted = $state(false)

	$effect(() => {
		if (sortStatus === Statuses.in_progress && !sortStarted) runSorting()
	})

	async function runSorting() {
		sortStarted = true

		const animations = recordSwaps(sortType, initialArray)
		await animate(animations, ([first, second]) => swap(array, first, second))

		sortStatus = Statuses.done
		sortStarted = false
	}
</script>

<Card title={sortType}>
	{#snippet status()}
		<Status value={sortStatus} />
	{/snippet}

	<Bars {array} />
</Card>
