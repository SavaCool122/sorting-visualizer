import { createEffect, createSignal, For, Show } from 'solid-js'
import { randomArray } from '../../utils/randomArray'
import { SORT_TYPE_LABEL } from '../../sorts-helpers/constants'
import { SvButton } from '../common/SvButton'
import { Contacts } from './Contacts'
import { Slider } from './Slider'
import { SvSwitch } from '../common/SvSwitch'
import { classNames } from '../../utils/classNames'

export function Sidebar(props) {
	const [arrayLength, setArrayLength] = createSignal(25)
	const [viewType, setType] = createSignal('SINGLE')
	const isSingle = () => viewType() === 'SINGLE'
	const isAll = () => viewType() === 'ALL'

	createEffect(() => {
		setRandomArray()
	})

	const setRandomArray = () => {
		props.onListUpdate(randomArray(arrayLength()))
	}

	function handleChange(value) {
		if (value) {
			setType('ALL')
			props.onChageViewType(viewType())
		} else {
			setType('SINGLE')
			props.onChageViewType(viewType())
		}
	}

	return (
		<div class="flex flex-col justify-between bg-white h-full p-3">
			<div>
				<div class="grid grid-cols-3 items-center justify-items-center mb-3 gap-5">
					<span className={classNames('uppercase justify-self-end', isAll() && 'text-primary')}>
						All
					</span>
					<SvSwitch onChange={handleChange} />
					<span
						className={classNames('uppercase justify-self-start', isSingle() && 'text-primary')}
					>
						Single
					</span>
				</div>

				<div class="grid grid-cols-2 grid-rows-auto gap-4">
					<SvButton disabled={false} class="col-span-2" onClick={setRandomArray}>
						Reset Array
					</SvButton>

					<Show
						when={isSingle()}
						fallback={
							<SvButton
								disabled={false}
								class="col-span-2"
								onClick={() => props.onSelectSort('ALL')}
							>
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
			</div>
			<div class="flex mb-5 justify-center items-center">
				<Contacts />
			</div>
		</div>
	)
}
