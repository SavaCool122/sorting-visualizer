export function SortInfo(props) {
	return (
		<span class="absolute p-3 text-white">
			Sort type: {props.sortLabel || 'None'}
			<br />
			Steps: {props.stepsLength}
			<Show when={props.isDone}>
				<br />
				Done ✓
			</Show>
		</span>
	)
}
