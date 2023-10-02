import { Sidebar } from './sidebar/Sidebar'
import { BarGraph } from './graph/BarGraph'
import { createSortRegistrator } from '../utils/sortRegistrator'
import { createSignal, For } from 'solid-js'
import { SORT_TYPE_LIST, SORT_TYPE_LABEL } from '../sorts-helpers/constants'

export function App() {
	const { runAllSorts } = createSortRegistrator()
	const [list, setList] = createSignal([])

	function handlerListUpdate(list) {
		setList(list)
	}
	const startSelectedSort = () => {
		runAllSorts()
	}

	return (
		<div class="grid grid-cols-6 min-h-screen">
			<Sidebar
				sortList={SORT_TYPE_LIST}
				onListUpdate={handlerListUpdate}
				onSelectSort={startSelectedSort}
			/>
			<div class="grid grid-cols-2 col-span-5">
				<For each={SORT_TYPE_LIST}>
					{sortingAlgorithm => (
						<BarGraph
							list={list()}
							sortLabel={SORT_TYPE_LABEL[sortingAlgorithm]}
							sortType={sortingAlgorithm}
						/>
					)}
				</For>
			</div>
		</div>
	)
}
