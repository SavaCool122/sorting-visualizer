<script>
	import Bar from './Bar.svelte'
	import { onDestroy } from 'svelte'
	import { sortingAlgorithmsFabric } from '../core/sorting-algorithms-fabric.js'
	import { startAnimation } from '../core/animations/start-animation.js'
	import { flip } from 'svelte/animate'
	import { sineInOut } from 'svelte/easing'

	export let status
	export let list
	export let sortType
	export let registrator

	/** @type {(value: number[]) => {id: number, value: number}[]} */
	const createList = values =>
		values.map((value, idx) => {
			return { id: idx, value }
		})

	let alist = createList(list)

	async function sort() {
		const animations = sortingAlgorithmsFabric.recordAnimation(sortType, list.slice())
		await startBarAnimation(animations)
	}

	async function startBarAnimation(animations) {
		await startAnimation(animations, {
			onStep([first, second]) {
				const temp = alist[first]
				alist[first] = alist[second]
				alist[second] = temp
				alist = alist
			},
		})
		status = 'done'
	}

	registrator.register(sortType, sort)
	onDestroy(() => {
		registrator.unregister(sortType)
	})
</script>

<div class="inline-flex max-w-min items-end justify-center gap-1" style="height: 200px">
	{#each alist as number (number.id)}
		<div animate:flip={{ duration: 300, easing: sineInOut }}>
			<Bar number={number.value} />
		</div>
	{/each}
</div>
