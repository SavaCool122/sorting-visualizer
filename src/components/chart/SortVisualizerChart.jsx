import { createEffect, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import { SortInfo } from './SortInfo'
import { Column } from './Column'
import { startAnimation } from '../../utils/animations/startAnimation'

export function SortVisualizerChart(props) {
	const [isDone, setIsDone] = createSignal(false)
	const [stepsLength, setStepsLength] = createSignal(0)
	const [list, setList] = createStore(props.list)

	createEffect(() => {
		setList(props.list)
	})

	createEffect(async () => {
		if (props.animationSteps.length > 0) {
			setStepsLength(props.animationSteps.length)
			await startAnimation(props.animationSteps, {
				onStart() {
					setIsDone(false)
				},
				onStep(position, value) {
					setList(position, value)
				},
				onEnd() {
					setIsDone(true)
					props.onDone()
				},
			})
		}
	})

	return (
		<div style="height: 230px">
			<SortInfo isDone={isDone()} sort={props.sort} stepsLength={stepsLength()} />
			<div class="p-3 h-full grid grid-flow-col items-end gap-1">
				<Index each={list}>{number => <Column number={number()} />}</Index>
			</div>
		</div>
	)
}
