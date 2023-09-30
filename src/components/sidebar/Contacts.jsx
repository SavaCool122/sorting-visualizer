import { Icon } from '../common/icons/Github'

export function Contacts() {
	return (
		<div class="flex gap-x-4 p-2 self-center">
			<a
				class="s-contact inline-flex items-center gap-x-2 mb-5 p-2"
				target="_blank"
				href="https://github.com/SavaCool122/sorting-visualizer"
			>
				Github
				<Icon name="github" width={48} heigth={48} />
			</a>
		</div>
	)
}
