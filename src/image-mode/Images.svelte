<script>
	import './card.css'
	import { generateCards } from './image-cards-generator.js'
	import { shuffle } from '../core/shuffle.js'
	import { onDestroy } from 'svelte'
	import { sineInOut } from 'svelte/easing'
	import { flip } from 'svelte/animate'
	import { sortingAlgorithmsFabric } from '../core/sorting-algorithms-fabric.js'
	import { startAnimation } from '../core/animations/start-animation.js'

	export let status
	export let registrator
	export let sortType

	const cards = shuffle(generateCards())
	const list = cards.map(c => c.id)
	let alist = cards

	async function sort() {
		console.log(list)
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

<div>
	<div class="flex w-[250px] flex-wrap">
		{#each alist as card (card.id)}
			<div
				animate:flip={{ duration: 300, easing: sineInOut }}
				class="card"
				style={`border: 1px solid gray;background: url(/dog-small.jpg) ${card.x}px ${card.y}px`}
			></div>
		{/each}
	</div>
</div>
