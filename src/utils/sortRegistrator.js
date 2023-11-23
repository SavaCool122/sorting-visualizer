import { createSignal } from 'solid-js'

export function createSortRegistrator() {
	const [formMethods, setForms] = createSignal([])

	const register = (type, method) => {
		console.log('+ ', type)
		setForms(arr => [...arr, { type, method }])
	}

	const unregister = type => {
		console.log('- ', type)
		setForms(arr => arr.filter(x => x.type === type))
	}

	const runAllSorts = () => {
		formMethods().forEach(m => m.method())
	}

	const runSortByType = type => {
		console.log(formMethods())
		const maybeSort = formMethods().find(method => method.type === type)
		if (maybeSort) {
			maybeSort.method()
		} else {
			throw new Error('no sort found')
		}
	}

	return { formMethods, register, runSortByType, runAllSorts, unregister }
}
