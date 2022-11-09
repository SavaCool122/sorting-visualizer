import { createEffect, createSignal, onMount } from 'solid-js'
import { ANIMATION_SPEED, Colors, SortTypes } from '../../../components/sort-visualizer/constants'
import { delay } from '../../../components/sort-visualizer/sortAnimation'
import { createStore } from 'solid-js/store'
import { getRandomArray, getSortMethods } from '../../../components/sort-visualizer/utils'
import { sortingList } from '../../../components/sort-visualizer/sortConfig'

export default function SortVisualizer() {
	return (
		<div
			class="h-screen grid gap-5"
			style="grid-template-columns: repeat(auto-fit, minmax(490px, 1fr));"
		>
			<For each={sortingList}>{sort => <SortVisualizerColumns sort={sort.id} />}</For>
		</div>
	)
}

function SortVisualizerColumns(props) {
	const [stepsLength, setStepsLength] = createSignal(0)
	const [arrayLength, setArrayLength] = createSignal(30)
	const [list, setList] = createStore(getRandomArray(arrayLength()))

	createEffect(() => {
		setList(getRandomArray(arrayLength()))
	})

	async function startSort(sortType) {
		const sortMethod = getSortMethods(sortType)
		const arrCopy = list.slice()

		const animationToSortArray = sortMethod(arrCopy)
		setStepsLength(animationToSortArray.length)

		for (let i = 0; i < animationToSortArray.length; i++) {
			const [position, value] = animationToSortArray[i]
			await delay(ANIMATION_SPEED)
			setList(position, value)
		}
	}

	onMount(async () => {
		startSort(props.sort)
	})

	return (
		<div class="relative" style="height: 230px">
			<span class="absolute">
				Sort type: {props.sort}
				<br />
				Steps: {stepsLength()}
			</span>
			<div class="p-3 h-full grid grid-flow-col items-end gap-1">
				<Index each={list}>
					{number => (
						<div
							style={{
								'background-color': Colors.PRIMARY_COLOR,
								height: `${number()}px`,
							}}
							class="column text-green-700 text-xs max-w-min"
						>
							<div class="rotate-90 w-3">{number}</div>
						</div>
					)}
				</Index>
			</div>
		</div>
	)
}
