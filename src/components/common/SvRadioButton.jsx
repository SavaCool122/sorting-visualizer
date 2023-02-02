export default function SvRadioButton(props) {
	return (
		<label class="form-control">
			<input type="radio" name="radio" onChange={props.onChange} checked={props.value} />
			{props.label}
		</label>
	)
}
