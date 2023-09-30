import { createEffect, createSignal, For, Show } from 'solid-js'
import { randomArray } from '../../utils/randomArray'
import { SORT_TYPE_LABEL } from '../../sorts-helpers/constants'
import { SvRadioButton } from '../common/SvRadioButton'
import { SvButton } from '../common/SvButton'
import { Contacts } from './Contacts'
import { Slider } from './Slider'

export function Sidebar(props) {
	const [viewType, setViewType] = createSignal(true)
	const [arrayLength, setArrayLength] = createSignal(25)

	createEffect(() => {
		setRandomArray()
	})

	const setRandomArray = () => {
		props.onListUpdate(randomArray(arrayLength()))
	}

	return (
		<div class="flex flex-col justify-between bg-white col-start-1 h-full col-span-1 p-3">
			<div class="grid grid-cols-2 grid-rows-auto gap-4">
				<SvRadioButton label="All" value={true} onChange={setViewType} />
				<SvRadioButton label="Single" value={false} onChange={setViewType} />

				<SvButton disabled={false} class="col-span-2" onClick={setRandomArray}>
					Reset Array
				</SvButton>

				<Show
					when={!viewType()}
					fallback={
						<SvButton disabled={false} class="col-span-2" onClick={() => props.onSelectSort('ALL')}>
							All
						</SvButton>
					}
				>
					<For each={props.sortList}>
						{sortType => (
							<SvButton
								disabled={false}
								class="col-span-1"
								onClick={() => props.onSelectSort(sortType)}
							>
								{SORT_TYPE_LABEL[sortType]}
							</SvButton>
						)}
					</For>
				</Show>

				<Slider
					label={arrayLength()}
					value={arrayLength()}
					disabled={false}
					class="col-span-2"
					onChange={v => {
						setArrayLength(Number(v))
					}}
				/>
			</div>

			<Contacts />
		</div>
	)
}
