import { ANIMATION_SPEED_MS } from './constants.js'
import { delay } from './delay.js'

/**
 * @param {[number, number][]} animations
 * @param {{onStep: () => void, speed?: number}} handlers
 */
export async function animate(animations = [], onStep) {
	for await (const animation of animations) {
		await delay(ANIMATION_SPEED_MS)
		onStep(animation)
	}
	await delay(ANIMATION_SPEED_MS) // wait for the last animation
}
