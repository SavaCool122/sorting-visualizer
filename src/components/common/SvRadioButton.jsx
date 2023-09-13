export function SvRadioButton(props) {
	const handleChange = e => {
		const value = e.target.value === 'true'
		props.onChange(value)
	}

	return (
		<label class="form-control">
			<input
				type="radio"
				name="radio"
				value={props.value}
				onChange={handleChange}
				checked={props.value}
			/>
			{props.label}
		</label>
	)
}
