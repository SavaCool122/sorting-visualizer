<script>
	import './card.css'
	import { generateCards } from './image-cards-generator.js'
	import { shuffle } from '../core/shuffle.js'
	import { sineInOut } from 'svelte/easing'
	import { flip } from 'svelte/animate'
	import { startAnimation } from '../core/animations/start-animation.js'
	import { recordAnimation } from '../core/sorting-algorithms-fabric'
	import { STATUS } from '../core/state/status'

	let { status = $bindable(), registrator, sortType, options } = $props()

	const ANIMTAION_SPEED = 60

	const cards = shuffle(generateCards())
	const list = cards.map(c => c.id)
	let alist = $state(cards)

	async function sort() {
		const animations = recordAnimation(sortType, list.slice())
		await startBarAnimation(animations)
	}

	async function startBarAnimation(animations) {
		await startAnimation(animations, {
			speed: ANIMTAION_SPEED,
			onStep([first, second]) {
				const temp = alist[first]
				alist[first] = alist[second]
				alist[second] = temp
				alist = alist
			},
		})
		status = STATUS.DONE
	}

	$effect(() => {
		registrator.register(sortType, sort)

		return () => registrator.unregister(sortType)
	})
</script>

<div>
	<div class="flex w-[250px] flex-wrap">
		{#each alist as card (card.id)}
			<div
				animate:flip={{ duration: ANIMTAION_SPEED - 50, easing: sineInOut }}
				class="card"
				style={`border: 1px solid gray;background: url(/${options.image.type}.jpg) ${card.x}px ${card.y}px`}
			></div>
		{/each}
	</div>
</div>
