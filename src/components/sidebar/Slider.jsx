import config from '../../config'

export function Slider(props) {
	return (
		<div class={props.class}>
			<div class="range-value text-center">
				<label style={props.disabled ? 'color: gray' : ''}>{props.label}</label>
			</div>
			<div class="flex justify-center mt-1">
				<input
					ref="slider"
					type="range"
					value={props.value}
					disabled={props.disabled || false}
					min={config.slider.min}
					max={config.slider.max}
					onInput={e => props.onChange(e.target.value)}
				/>
			</div>
		</div>
	)
}
