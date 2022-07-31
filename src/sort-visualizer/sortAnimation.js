import { ANIMATION_SPEED } from './constants';
import { Colors } from './sort-columns/constants';
import { getSortMethods } from './utils';

export const delay = (time = 0) => new Promise(resolve => setTimeout(resolve, time));

async function animationStep(animation, bars) {
	const [position, value] = animation;
	const barStyle = bars[position].style;

	await delay(ANIMATION_SPEED);
	barStyle.backgroundColor = Colors.SECONDARY_COLOR;
	await delay(ANIMATION_SPEED);
	barStyle.height = `${value}px`;
	await delay(ANIMATION_SPEED);
	barStyle.backgroundColor = Colors.PRIMARY_COLOR;
}

export async function playSortAnimation(animations, bars) {
	for (const animation of animations) {
		await animationStep(animation, bars);
	}
}

export async function handleSort(sort, array) {
	const barsArrayElm = document.getElementsByClassName('column');
	const arrCopy = array.slice();

	const sortMethod = getSortMethods(sort);
	const animationToSortArray = sortMethod(arrCopy);

	await playSortAnimation(animationToSortArray, barsArrayElm);
}
