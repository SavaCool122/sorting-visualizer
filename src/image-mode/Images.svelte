<script>
	import './card.css'
	import { generateCards } from './image-cards-generator.js'
	import { shuffle } from '../core/shuffle.js'
	import { onDestroy } from 'svelte'

	export let registrator
	export let sortType

	let animations = shuffle(generateCards())

	registrator.register(sortType, sort)

	async function sort() {
		animations = animations.toSorted((a, b) => a.id - b.id)
	}

	onDestroy(() => {
		registrator.unregister(sortType)
	})
</script>

<div>
	<div class="flex w-[250px] flex-wrap">
		{#each animations as number}
			<div
				class="card"
				style={`border: 1px solid gray;background: url(/dog-small.jpg) ${number.x}px ${number.y}px`}
			></div>
		{/each}
	</div>
</div>
