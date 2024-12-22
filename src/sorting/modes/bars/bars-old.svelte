<script>
	import Bar from './bar-old.svelte'
	import { recordAnimation } from '../../core/sorting-algorithms-fabric.js'
	import { startAnimation } from '../../core/animations/start-animation.js'
	import { flip } from 'svelte/animate'
	import { sineInOut } from 'svelte/easing'
	import { randomArray } from '../../core/random-array.js'
	import { delay } from '../../core/animations/delay.js'
	import { STATUS } from '../../core/state/status'
	import { shuffle } from '../../core/shuffle'
	import { MAX_ARRAY_LENGTH } from '../../core/constants.js'

	let { status = $bindable(), id, registrator, options } = $props()

	function fewUnique(max) {
		const numberOfRepat = 3
		const numeberOfUnique = max / numberOfRepat
		const uniqueNubers = randomArray(numeberOfUnique)

		return shuffle(
			uniqueNubers.reduce((acc, curr) => {
				Array.from({ length: numberOfRepat }, () => curr)
				return [...acc, ...Array.from({ length: numberOfRepat }, () => curr)]
			}, []),
		)
	}

	function createArray(type) {
		if (type === 'random') return randomArray(MAX_ARRAY_LENGTH)
		if (type === 'reversed') return randomArray(MAX_ARRAY_LENGTH).sort((a, b) => b - a)
		if (type === 'few-unique') return fewUnique(MAX_ARRAY_LENGTH)
		return randomArray(MAX_ARRAY_LENGTH)
	}

	let list = $derived(createArray(options.type))

	/** @type {(value: number[]) => {id: number, value: number}[]} */
	const createList = values =>
		values.map((value, idx) => {
			return { id: idx, value }
		})

	let alist = $state([])

	$effect(() => {
		alist = createList(list)
	})

	async function sort() {
		const animations = recordAnimation(id, list.slice())
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
		status = STATUS.DONE
	}

	$effect(() => {
		registrator.register(id, sort)

		return () => registrator.unregister(id)
	})
</script>

<div class="inline-flex max-w-min items-end justify-center gap-1" style="height: 200px">
	{#each alist as number (number.id)}
		<div animate:flip={{ duration: 300, easing: sineInOut }}>
			<Bar number={number.value} />
		</div>
	{/each}
</div>
