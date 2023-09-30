import { createSignal } from 'solid-js'

export function createSortRegistrator() {
	const [formMethods, setForms] = createSignal([])

	const register = (type, method) => {
		setForms(arr => [...arr, { type, method }])
	}

	const unregister = type => {
		setForms(arr => arr.filter(x => x.type === type))
	}

	const runAllSorts = () => {
		formMethods().forEach(m => m.method())
	}

	return { register, runAllSorts, unregister }
}
