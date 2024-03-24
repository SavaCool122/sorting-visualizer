import { createEffect, createSignal, For } from 'solid-js'
import { generateCards } from '../image_cards_generator'
import { shuffle } from '../../lib/shuffle'
import { createStore } from 'solid-js/store'

export const ImageCards = () => {
	const [list, setList] = createSignal(generateCards({}))
	const [listForAnimation, setAnimationList] = createStore([])

	createEffect(() => {
		setAnimationList(list())
	})

	function handleShuffle() {
		const newList = shuffle(list().slice())
		setAnimationList(newList)
	}

	function handleSort() {
		const newList = list().toSorted((a, b) => a.id - b.id)
		setAnimationList(newList)
	}

	return (
		<div>
			<button onClick={handleShuffle}>Shuffle</button>
			<button onClick={handleSort}>Sort</button>
			<div class="flex flex-wrap w-[250px]">
				<For each={listForAnimation}>
					{number => (
						<div
							className="card"
							style={`border: 1px solid gray;background: url(/dog-small.jpg) ${number.x}px ${number.y}px`}
						></div>
					)}
				</For>
			</div>
		</div>
	)
}
