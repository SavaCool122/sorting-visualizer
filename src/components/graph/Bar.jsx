export function Bar(props) {
	return (
		<div
			style={{
				height: `${props.number}px`,
			}}
			class="bg-white text-xs max-w-min rounded-t-lg text-primary-dark"
		>
			<div class="rotate-90 w-3">{props.number}</div>
		</div>
	)
}
