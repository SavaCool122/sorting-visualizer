import { createEffect, createSignal, Index, onCleanup } from 'solid-js'
import { createStore } from 'solid-js/store'
import { SortInfo } from './SortInfo'
import { Column } from './Column'
import { startAnimation } from '../../utils/animations/startAnimation'
import { createSortRegistrator } from '../../utils/sortRegistrator'

export function SortVisualizerChart(props) {
	const { unregister } = createSortRegistrator()

	const [isDone, setIsDone] = createSignal(false)
	const [list, setList] = createStore(props.list)

	props.register(props.sort, validate)
	onCleanup(() => unregister(props.sort))
	createEffect(() => {
		setList(props.list)
	})

	function validate() {
		console.log('validate', props.sort)
	}

	async function startCharAnimation() {
		await startAnimation(props.animationSteps, {
			onStart() {
				setIsDone(false)
			},
			onStep(position, value) {
				setList(position, value)
			},
			onEnd() {
				setIsDone(true)
			},
		})
	}

	return (
		<div style="height: 230px">
			<SortInfo isDone={isDone()} sort={props.sort} stepsLength={0} />
			<div class="p-3 h-full grid grid-flow-col items-end gap-1">
				<Index each={list}>{number => <Column number={number()} />}</Index>
			</div>
		</div>
	)
}
