export function proxyWrapper(items, pivots) {
	const handler = {
		set: function (target, property, value) {
			target[property] = value
			pivots.push([Number(property), value])
			return true
		},
	}

	return new Proxy(items, handler)
}
