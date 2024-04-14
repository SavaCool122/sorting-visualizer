<script>
	import Bar from './Bar.svelte'
	import { onDestroy } from 'svelte'
	import { sortingAlgorithmsFabric } from '../core/sorting-algorithms-fabric.js'
	import { startAnimation } from '../core/animations/start-animation.js'
	import { flip } from 'svelte/animate'
	import { delay } from '../core/animations/delay.js'
	import config from '../config.js'
	import { sineInOut } from 'svelte/easing'

	export let status
	export let list
	export let sortType
	export let registrator

	/** @type {(value: number[]) => {order: number, value: number}[]} */
	const createList = values =>
		values.map((value, idx) => {
			return { order: idx, value }
		})

	let alist = createList(list)

	async function sort() {
		const animations = sortingAlgorithmsFabric.recordAnimation(sortType, list.slice())
		await startCharAnimation(animations)
	}

	async function startCharAnimation(animations) {
		console.log(animations, 'x')
		for (let i = 0; i < animations.length; i++) {
			const [first, second] = animations[i]
			await delay(config.animationSpeed)
			const temp = alist[first]
			alist[first] = alist[second]
			alist[second] = temp
			alist = alist
		}

		// await startAnimation(animations, {
		// 	onStep(position, value) {
		// 		listForAnimation[position] = value
		// 	},
		// })
		// status = 'done'
	}

	registrator.register(sortType, sort)
	onDestroy(() => {
		registrator.unregister(sortType)
	})
</script>

<div class="inline-flex max-w-min items-end justify-center gap-1" style="height: 200px">
	{#each alist as number (number.order)}
		<div animate:flip={{ duration: 300, easing: sineInOut }}>
			<Bar number={number.value} />
		</div>
	{/each}
</div>
