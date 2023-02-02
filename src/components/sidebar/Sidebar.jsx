import SvRadioButton from '../common/SvRadioButton'
import SvButton from '../common/SvButton'
import sortingList from '../sorts-helpers/sortConfig'
import Contacts from './Contacts'
import Slider from './Slider'

export default function Sidebar(props) {
	return (
		<div class="flex flex-col justify-between bg-white col-start-1 h-full col-span-1 p-3">
			<div class="grid grid-cols-2 grid-rows-auto gap-4">
				<SvRadioButton label="All" value={true} />
				<SvRadioButton label="Single" value={false} />
				<SvButton disabled={props.disabled} class="col-span-2" onClick={props.onResetArray}>
					Reset Array
				</SvButton>
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
