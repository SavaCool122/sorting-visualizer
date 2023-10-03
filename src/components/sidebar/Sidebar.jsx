import { createEffect, createSignal, For } from 'solid-js'
import { randomArray } from '../../utils/randomArray'
import { SORT_TYPE_LABEL } from '../../sorts-helpers/constants'
import { SvButton } from '../common/SvButton'
import { Contacts } from './Contacts'
import { Slider } from './Slider'

export function Sidebar(props) {
	const [arrayLength, setArrayLength] = createSignal(25)

	createEffect(() => {
		setRandomArray()
	})

	const setRandomArray = () => {
		props.onListUpdate(randomArray(arrayLength()))
	}

	return (
		<div class="flex flex-col justify-between bg-white h-full p-3">
			<div>
				<div class="grid grid-cols-2 grid-rows-auto gap-4">
					<SvButton disabled={false} class="col-span-2" onClick={setRandomArray}>
						Reset Array
					</SvButton>

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

					<SvButton disabled={false} class="col-span-2" onClick={() => props.onSelectSort('ALL')}>
						All
					</SvButton>

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
			</div>
			<div class="flex mb-5 justify-center items-center">
				<Contacts />
			</div>
		</div>
	)
}
