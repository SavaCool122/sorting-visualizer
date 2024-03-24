export function sortRegistrator() {
	let entities = []

	return {
		/**
		 * @param {string} type
		 * @param {string} cb
		 */
		register(type, cb) {
			entities.push({ type, cb })
		},
		/** @param {string} type */
		runSortByType(type) {
			const maybeSort = entities.find(method => method.type === type)
			maybeSort.cb()
		},
		/** @param {string} type */
		unregister(type) {
			entities = entities.filter(x => x.type !== type)
		},
		runAllSorts() {
			entities.forEach(m => m.cb())
		},
	}
}
