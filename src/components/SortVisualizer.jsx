import { createEffect, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import { getSortMethods } from './utils'
import { Sidebar } from './sidebar/Sidebar'
import { SortVisualizerChart } from './chart/SortVisualizerChart'
import { sortConfig } from './sorts-helpers/sortConfig'
import { randomArray } from '../utils/randomArray'

export function App() {
	const [arrayLength, setArrayLength] = createSignal(25)

	const [list, setList] = createStore(randomArray(arrayLength()))
	const isDisabled = () => sortsList.some(sort => !sort.isDone)
	const arrCopy = () => list.slice()

	const createSortObj = sortType => ({ sortType, animations: [], isDone: true })

	const prepareAllSorts = () => {
		return sortConfig.filter(s => !s.disabled).map(s => createSortObj(s.id))
	}

	const [sortsList, setSortList] = createStore(prepareAllSorts())

	const startSort = () => {
		sortsList.forEach(sort => {
			const sortMethod = getSortMethods(sort.sortType)
			setSortList(s => s.sortType === sort.sortType, 'animations', sortMethod(arrCopy()))
			setSortList(s => s.sortType === sort.sortType, 'isDone', false)
		})
	}

	createEffect(() => {
		setList(randomArray(arrayLength()))
	})

	const prepareOneSort = sortType => {
		return [createSortObj(sortType)]
	}

	const startSelectedSort = sortType => {
		if (!sortType) return

		let sortsList
		if (sortType === 'ALL') sortsList = prepareAllSorts()
		else sortsList = prepareOneSort(sortType)

		setSortList(sortsList)
		startSort()
	}

	return (
		<div class="grid grid-cols-6 min-h-screen">
			<Sidebar
				arrayLength={arrayLength()}
				disabled={isDisabled()}
				onSelectSort={startSelectedSort}
				onResetArray={() => setList(randomArray(arrayLength()))}
				onChangeArrayLength={v => {
					setArrayLength(Number(v))
				}}
			/>
			<div class="grid grid-cols-2 col-span-5">
				<For each={sortsList}>
					{sort => (
						<SortVisualizerChart
							list={arrCopy()}
							animationSteps={sort.animations}
							sort={sort.sortType}
							onDone={() => setSortList(s => s.sortType === sort.sortType, 'isDone', true)}
						/>
					)}
				</For>
			</div>
		</div>
	)
}
