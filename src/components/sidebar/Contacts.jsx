import { Icon } from '../common/Icon'

export function Contacts() {
	return (
		<div class="gap-x-4 self-center">
			<a
				class="inline-flex items-center mb-5 gap-x-2 p-2"
				target="_blank"
				href="https://github.com/SavaCool122/sorting-visualizer"
			>
				Github
				<Icon name="github" width={48} height={48} />
			</a>
		</div>
	)
}
