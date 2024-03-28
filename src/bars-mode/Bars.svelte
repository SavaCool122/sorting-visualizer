<script>
	import Bar from './Bar.svelte'
	import { onDestroy } from 'svelte'
	import { sortingAlgorithmsFabric } from '../core/sorting-algorithms-fabric.js'
	import { startAnimation } from '../core/animations/start-animation.js'

	export let status
	export let list
	export let sortType
	export let registrator

	let listForAnimation

	$: listForAnimation = list.slice()

	registrator.register(sortType, sort)

	async function sort() {
		const animations = sortingAlgorithmsFabric.recordAnimation(sortType, listForAnimation)

		await startCharAnimation(animations)
	}

	async function startCharAnimation(animations) {
		await startAnimation(animations, {
			onStep(position, value) {
				listForAnimation[position] = value
			},
		})
		status = 'done'
	}

	onDestroy(() => {
		registrator.unregister(sortType)
	})
</script>

<div class="inline-flex max-w-min items-end justify-center gap-1" style="height: 200px">
	{#each listForAnimation as number}
		<Bar {number} />
	{/each}
</div>
