import config from '../../config.js'
import { delay } from './delay.js'

/**
 * @param {[number, number][]} animations
 * @param {{onStep: ([number, number]) => void}} handlers
 * @returns {Promise<void>}
 */
export async function startAnimation(animations = [], handlers) {
	const { onStep } = handlers
	for (let i = 0; i < animations.length; i++) {
		await delay(config.animationSpeed)
		onStep(animations[i])
	}
	await delay(config.animationSpeed) // wait for the last animation
}
