import config from '../../config.js'
import { delay } from './delay.js'

/**
 * @typedef {Object} AnimationHandlers
 * @property {Function} [onStart]
 * @property {Function} [onStep]
 * @property {Function} [onEnd]
 */

/**
 * @param {Array<[position, value]>} animations
 * @param {AnimationHandlers} handlers
 * @returns {Promise<void>}
 */
export async function startAnimation(animations = [], handlers) {
	const { onStart = () => {}, onStep = () => {}, onEnd = () => {} } = handlers
	onStart()
	for (let i = 0; i < animations.length; i++) {
		const [position, value] = animations[i]
		await delay(config.animationSpeed)
		onStep(position, value)
	}
	onEnd()
}
