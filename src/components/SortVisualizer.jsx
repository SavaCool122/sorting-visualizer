import { createEffect, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import { getRandomArray, getSortMethods } from './utils'
import Sidebar from './sidebar/Sidebar'
import SortVisualizerChart from './chart/SortVisualizerChart'

export default function SortVisualizer() {
	const [sortType, setSort] = createSignal(null)
	const [arrayLength, setArrayLength] = createSignal(25)
	const [animationSteps, setAnimationSteps] = createStore([])
	const [list, setList] = createStore(getRandomArray(arrayLength()))
	const isDisabled = () => sortType() !== null

	const resetSortType = () => setSort(null)

	const getCopy = list => list.slice()

	createEffect(() => {
		if (sortType()) {
			const sortMethod = getSortMethods(sortType())
			setAnimationSteps(sortMethod(list.slice()))
		}
	})

	return (
		<div class="grid grid-cols-6 min-h-screen">
			<Sidebar
				arrayLength={arrayLength()}
				disabled={isDisabled()}
				onSelectSort={setSort}
				onResetArray={() => setArrayLength(25)}
				onChangeArrayLength={v => {
					setArrayLength(Number(v))
					setList(getRandomArray(arrayLength()))
				}}
			/>
			<SortVisualizerChart
				list={getCopy(list)}
				animationSteps={animationSteps}
				sort={sortType()}
				onDone={resetSortType}
			/>
		</div>
	)
}
