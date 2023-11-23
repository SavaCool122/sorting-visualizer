import { Sidebar } from './sidebar/Sidebar'
import { BarGraph } from './graph/BarGraph'
import { createSortRegistrator } from '../utils/sortRegistrator'
import { createSignal, For } from 'solid-js'
import { SORT_TYPE_LIST, SORT_TYPE_LABEL } from '../sorts-helpers/constants'

export function App() {
	const sortRegistrator = createSortRegistrator()
	const [list, setList] = createSignal([])
	const [graphList, setGraphList] = createSignal(SORT_TYPE_LIST)

	function handlerListUpdate(list) {
		setList(list)
	}

	const startSelectedSort = type => {
		if (type === 'ALL') {
			sortRegistrator.runAllSorts()
		} else {
			setGraphList(prev => {
				const index = prev.findIndex(sortType => sortType === type)
				if (index > -1) {
					return [prev[index]]
				} else {
					throw new Error('cant find')
				}
			})
			sortRegistrator.runSortByType(type)
		}
	}

	function handleChangeViewType() {}

	return (
		<div class="grid grid-cols-6 min-h-screen">
			<Sidebar
				sortList={SORT_TYPE_LIST}
				onListUpdate={handlerListUpdate}
				onSelectSort={startSelectedSort}
				onChageViewType={handleChangeViewType}
			/>
			<div class="grid grid-cols-2 col-span-5">
				<For each={graphList()}>
					{sortingAlgorithm => (
						<BarGraph
							registrator={sortRegistrator}
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
