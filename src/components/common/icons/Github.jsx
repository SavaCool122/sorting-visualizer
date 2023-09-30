export function Icon({ name, ...props }) {
	return (
		<svg {...props}>
			<use href={`/icons.svg#${name}`} />
		</svg>
	)
}
