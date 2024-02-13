import { render } from 'solid-js/web'
// import { App } from './src/components/SortVisualizer'
// import './src/assets/styles/index.css'
import './index.css'
import { createSignal, For } from 'solid-js'

const App = () => {
	// 1920 / 240 = 8
	// 1920 / 240 = 8
	const pixelList = Array.from({ length: 8 * 8 }, (_, index) => index)
	const cordsList = [
		{
			x: 0,
			y: 0,
		},
		{
			x: -480,
			y: 0,
		},
		{
			x: -960,
			y: 0,
		},
		{
			x: -1_440,
			y: 0,
		},
	]

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex

		// While there remain elements to shuffle.
		while (currentIndex > 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex--

			// And swap it with the current element.
			;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
		}

		return array
	}

	const fullList = cordsList
		.map((item, index, array) => {
			return array.map(curr => {
				return {
					...curr,
					y: -(480 * index),
				}
			})
		})
		.flat()

	const [list, setList] = createSignal(shuffle(fullList))

	return (
		<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; color: white;">
			<button
				onClick={() => {
					setList(list().toSorted((a, b) => a.x - b.y))
				}}
			>
				sort
			</button>
			<For each={list()}>
				{number => (
					<div
						class="card"
						style={`border: 1px solid red;background: url(/dog.jpg) ${number.x}px ${number.y}px`}
					>
						{number.x} : {number.y}
					</div>
				)}
			</For>
		</div>
	)
}

const appRender = () => <App />
const rootElem = document.getElementById('app')
render(appRender, rootElem)
