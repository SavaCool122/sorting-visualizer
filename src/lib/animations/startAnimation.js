import config from '../../config.js'
import { delay } from './delay.js'
import { noop } from '../noop.js'

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
	const { onStart = noop, onStep = noop, onEnd = noop } = handlers
	onStart()
	for (let i = 0; i < animations.length; i++) {
		const [position, value] = animations[i]
		await delay(config.animationSpeed)
		onStep(position, value)
	}
	onEnd()
}
