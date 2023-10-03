import { createSignal } from 'solid-js'

const classNames = (...args) => {
	return args.filter(Boolean).join(' ')
}

export function SvSwitch(props) {
	const [enable, setEnable] = createSignal()
	const height = props.height || 30
	const width = props.width || 60
	const paddings = props.paddings || 4

	const circleSide = height - paddings
	const translate = width - height
	const defaultSwitchClasses = `relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`
	const defaultCircleClasses = `pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"`

	const handleClick = () => {
		setEnable(!enable())
		props.onChange(!enable())
	}

	return (
		<button
			style={{
				height: `${height}px`,
				width: `${width}px`,
			}}
			class={classNames(enable() ? 'bg-primary' : 'bg-primary', defaultSwitchClasses)}
			role="switch"
			type="button"
			tabIndex="0"
			aria-checked={enable() ? 'true' : 'false'}
			data-headlessui-state={enable() && 'checked'}
			onClick={handleClick}
		>
			<span
				style={{
					height: `${circleSide}px`,
					width: `${circleSide}px`,
					transform: enable() ? `translateX(${translate}px)` : 'translateX(0)',
				}}
				aria-hidden="true"
				class={classNames(defaultCircleClasses)}
			/>
		</button>
	)
}
