import SvRadioButton from '../common/SvRadioButton'
import SvButton from '../common/SvButton'
import sortingList from '../sorts-helpers/sortConfig'
import Contacts from './Contacts'
import Slider from './Slider'
import { createSignal } from 'solid-js'

export default function Sidebar(props) {
	const [viewType, setViewType] = createSignal(true)

	return (
		<div class="flex flex-col justify-between bg-white col-start-1 h-full col-span-1 p-3">
			<div class="grid grid-cols-2 grid-rows-auto gap-4">
				<SvRadioButton label="All" value={true} onChange={setViewType} />
				<SvRadioButton label="Single" value={false} onChange={setViewType} />

				<SvButton disabled={props.disabled} class="col-span-2" onClick={props.onResetArray}>
					Reset Array
				</SvButton>

				<Show
					when={!viewType()}
					fallback={
						<SvButton
							disabled={props.disabled}
							class="col-span-2"
							onClick={() => props.onSelectSort('ALL')}
						>
							All
						</SvButton>
					}
				>
					<For each={sortingList}>
						{sort => (
							<SvButton
								disabled={props.disabled}
								class="col-span-1"
								onClick={() => props.onSelectSort(sort.id)}
							>
								{sort.name}
							</SvButton>
						)}
					</For>
				</Show>

				<Slider
					label={props.arrayLength}
					value={props.arrayLength}
					disabled={props.disabled}
					class="col-span-2"
					onChange={props.onChangeArrayLength}
				/>
			</div>

			<Contacts />
		</div>
	)
}
