import { Sidebar } from './sidebar/Sidebar'
import { SortVisualizerChart } from './chart/SortVisualizerChart'
import { SORT_TYPES } from './constants'
import { createSortRegistrator } from '../utils/sortRegistrator'
import { createSignal } from 'solid-js'

export function App() {
	const { register, runAllSorts } = createSortRegistrator()
	const [list, setList] = createSignal([])

	const startSelectedSort = sortType => {
		runAllSorts()
	}

	return (
		<div class="grid grid-cols-6 min-h-screen">
			<Sidebar
				onListUpdate={newList => {
					setList(newList)
				}}
				onSelectSort={startSelectedSort}
			/>
			<div class="grid grid-cols-2 col-span-5">
				<SortVisualizerChart register={register} list={list().slice()} sort={SORT_TYPES.QUICK} />
				<SortVisualizerChart register={register} list={list().slice()} sort={SORT_TYPES.MERGE} />
			</div>
		</div>
	)
}
