/** @param {Set<string>} sortList */
export function sortRegistrator(sortList) {
	let entities = new Map([...sortList].map(type => [type, () => {}]))

	return {
		/**
		 * @param {string} type
		 * @param {() => void} cb
		 */
		register(type, cb) {
			entities.set(type, cb)
		},
		/** @param {string} type */
		async runSortByType(type) {
			const maybeSort = entities.get(type)
			return maybeSort()
		},
		async runAllSorts() {
			const allSorts = [...entities].map(([, cb]) => cb())
			return await Promise.all(allSorts)
		},
	}
}
