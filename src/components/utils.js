import { sortMethodsConfig } from './sorts-helpers/sortMethodsConfig'

export function getSortMethods(type) {
	const sortMethod = sortMethodsConfig[type]
	if (!sortMethod) throw new Error("Sort don't found")
	return sortMethod
}
