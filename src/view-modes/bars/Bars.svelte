<script>
	import SortInfo from './SortInfo.svelte'
	import Bar from './Bar.svelte'
	import { onDestroy } from 'svelte'
	import { startAnimation } from '../../lib/animations/startAnimation.js'
	import { sortingAlgorithmsFabric } from '../../core/sortingAlgorithmsFabric.js'

	export let sortLabel
	export let list
	export let registrator
	export let sortType

	let isDone = false
	let listForAnimation

	$: listForAnimation = list.slice()

	registrator.register(sortType, sort)
	onDestroy(() => {
		registrator.unregister(sortType)
	})

	async function sort() {
		const animations = sortingAlgorithmsFabric.createAnimation(sortType, listForAnimation)

		isDone = false
		await startCharAnimation(animations)
		isDone = true
	}

	async function startCharAnimation(animations) {
		await startAnimation(animations, {
			onStep(position, value) {
				listForAnimation[position] = value
			},
		})
	}
</script>

<div style="height: 230px">
	<SortInfo {isDone} {sortLabel} stepsLength={0} />
	<div class="p-3 h-full grid grid-flow-col items-end gap-1">
		{#each listForAnimation as number}
			<Bar {number} />
		{/each}
	</div>
</div>
