<script>
	import Bar from './Bar.svelte'
	import { recordAnimation } from '../core/sorting-algorithms-fabric.js'
	import { startAnimation } from '../core/animations/start-animation.js'
	import { flip } from 'svelte/animate'
	import { sineInOut } from 'svelte/easing'
	import { randomArray } from '../core/random-array.js'
	import config from '../config.js'
	import { delay } from '../core/animations/delay.js'

	let { status = $bindable(), sortType, registrator } = $props()

	let list = $state(randomArray(config.slider.max))

	/** @type {(value: number[]) => {id: number, value: number}[]} */
	const createList = values =>
		values.map((value, idx) => {
			return { id: idx, value }
		})

	let alist = $state(createList(list))

	async function sort() {
		const animations = recordAnimation(sortType, list.slice())
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
		await delay(config.animationSpeed * 3) // time to see a result
		status = 'done'
	}

	registrator.register(sortType, sort)
</script>

<div class="inline-flex max-w-min items-end justify-center gap-1" style="height: 200px">
	{#each alist as number (number.id)}
		<div animate:flip={{ duration: 300, easing: sineInOut }}>
			<Bar number={number.value} />
		</div>
	{/each}
</div>
