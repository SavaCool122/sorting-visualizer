import { ANIMATION_SPEED_MS } from './constants.js'
import { delay } from './delay.js'

/**
 * @param {[number, number][]} animations
 * @param {{onStep: () => void, speed?: number}} handlers
 */
export async function animate(animations = [], onStep) {
	for (let i = 0; i < animations.length; i++) {
		await delay(ANIMATION_SPEED_MS)
		onStep(animations[i])
	}
	await delay(ANIMATION_SPEED_MS) // wait for the last animation
}
