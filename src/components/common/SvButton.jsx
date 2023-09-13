export function SvButton(props) {
	return (
		<button
			disabled={props.disabled}
			class={'sv-button p-2 bg-primary-light ' + props.class}
			classList={{
				'bg-gray-400 text-white cursor-not-allowed': props.disabled,
				'text-primary': !props.disabled,
			}}
			style="border-radius: 11px;"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}
