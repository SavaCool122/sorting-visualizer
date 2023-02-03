import { MIN_SLIDER_VALUE, MAX_SLIDER_VALUE } from '../constants'

export default function Slider(props) {
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
					min={MIN_SLIDER_VALUE}
					max={MAX_SLIDER_VALUE}
					onInput={e => props.onChange(e.target.value)}
				/>
			</div>
		</div>
	)
}
