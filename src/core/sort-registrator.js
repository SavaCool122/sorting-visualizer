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
		async runSortByType(type) {
			const maybeSort = entities.find(method => method.type === type)
			return maybeSort.cb()
		},
		/** @param {string} type */
		unregister(type) {
			entities = entities.filter(x => x.type !== type)
		},
		async runAllSorts() {
			const allSorts = entities.map(m => m.cb())
			return await Promise.all(allSorts)
		},
	}
}
