import { createEffect, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import { delay } from '../utils'
import { ANIMATION_SPEED } from '../constants'
import SortInfo from './SortInfo'
import Column from './Column'

export default function SortVisualizerChart(props) {
	const [isDone, setIsDone] = createSignal(false)
	const [stepsLength, setStepsLength] = createSignal(0)
	const [list, setList] = createStore(props.list)

	createEffect(() => {
		setList(props.list)
	})

	createEffect(() => {
		if (props.animationSteps.length > 0) {
			setStepsLength(props.animationSteps.length)
			startAnimation(props.animationSteps)
		}
	})

	async function startAnimation(animationToSortArray) {
		setIsDone(false)

		for (let i = 0; i < animationToSortArray.length; i++) {
			const [position, value] = animationToSortArray[i]
			await delay(ANIMATION_SPEED)
			setList(position, value)
		}

		setIsDone(true)
		props.onDone()
	}

	return (
		<div style="height: 230px">
			<SortInfo isDone={isDone()} sort={props.sort} stepsLength={stepsLength()} />
			<div class="p-3 h-full grid grid-flow-col items-end gap-1">
				<Index each={list}>{number => <Column number={number()} />}</Index>
			</div>
		</div>
	)
}
