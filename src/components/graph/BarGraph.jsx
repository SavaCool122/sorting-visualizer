import { createStore } from 'solid-js/store'
import { createEffect, createSignal, Index, onCleanup } from 'solid-js'
import { SortInfo } from './SortInfo'
import { Bar } from './Bar'
import { startAnimation } from '../../utils/animations/startAnimation'
import { sortingAlgorithmsFabric } from '../../sorts-helpers/sortingAlgorithms'

export function BarGraph(props) {
	const [isDone, setIsDone] = createSignal(false)
	const [listForAnimation, setList] = createStore([])

	createEffect(() => {
		setList(props.list)
	})

	props.registrator.register(props.sortType, sort)
	onCleanup(() => props.registrator.unregister(props.sortType))

	async function sort() {
		const animations = sortingAlgorithmsFabric.createAnimation(props.sortType, props.list)

		setIsDone(false)
		await startCharAnimation(animations)
		setIsDone(true)
	}

	async function startCharAnimation(animations) {
		await startAnimation(animations, {
			onStep(position, value) {
				setList(position, value)
			},
		})
	}

	return (
		<div style="height: 230px">
			<SortInfo isDone={isDone()} sortLabel={props.sortLabel} stepsLength={0} />
			<div class="p-3 h-full grid grid-flow-col items-end gap-1">
				<Index each={listForAnimation}>{number => <Bar number={number()} />}</Index>
			</div>
		</div>
	)
}