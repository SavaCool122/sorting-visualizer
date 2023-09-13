export function Column(props) {
	return (
		<div
			style={{
				'background-color': '#fff',
				height: `${props.number}px`,
			}}
			class="text-xs max-w-min rounded-t-lg text-primary-dark"
		>
			<div class="rotate-90 w-3">{props.number}</div>
		</div>
	)
}
