<script>
	import SortInfo from './SortInfo.svelte'
	import Bar from './Bars.svelte'
	import { onDestroy } from 'svelte'
	import { startAnimation } from '../../lib/animations/startAnimation.js'
	import { sortingAlgorithmsFabric } from '../../core/sortingAlgorithmsFabric.js'
	import Bars from './Bars.svelte'

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

<Bars list={listForAnimation} />
