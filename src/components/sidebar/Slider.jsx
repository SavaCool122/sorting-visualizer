export default function Slider(props) {
	return (
		<div class={props.class}>
			<div class="range-value text-center">
				<label style="disabled ? 'color: gray' : ''">{props.label}</label>
			</div>
			<div class="flex justify-center mt-1">
				<input
					ref="slider"
					type="range"
					value={props.value}
					disabled={props.disabled || false}
					min={props.min || 1}
					max={props.max || 90}
					onInput={e => props.onChange(e.target.value)}
				/>
			</div>
		</div>
	)
}
