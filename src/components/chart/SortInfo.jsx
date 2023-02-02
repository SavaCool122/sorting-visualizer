export default function SortInfo(props) {
	return (
		<span class="absolute p-3 text-white">
			Sort type: {props.sort || 'None'}
			<br />
			Steps: {props.stepsLength}
			<Show when={props.isDone}>
				<br />
				Done ✓
			</Show>
		</span>
	)
}
