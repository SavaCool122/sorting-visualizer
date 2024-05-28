import config from '../../config.js'
import { delay } from './delay.js'

/**
 * @param {[number, number][]} animations
 * @param {{onStep: Function, speed?: number}} handlers
 * @returns {Promise<void>}
 */
export async function startAnimation(animations = [], { speed = config.animationSpeed, onStep }) {
	for (let i = 0; i < animations.length; i++) {
		await delay(speed)
		onStep(animations[i])
	}
	await delay(config.animationSpeed) // wait for the last animation
}
