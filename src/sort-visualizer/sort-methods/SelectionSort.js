let pivots;

function selectionSort(arr) {
	let swap = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		let index = i;

		for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[index]) index = j;

		swap = arr[i];
		arr[i] = arr[index];
		arr[index] = swap;
	}
	return arr;
}

const handler = {
	apply: function (target, thisArg, argumentsList) {
		return thisArg[target].apply(this, argumentsList);
	},
	deleteProperty: function (target, property) {
		console.log('Deleted %s', property);
		return true;
	},
	set: function (target, property, value, receiver) {
		target[property] = value;
		pivots.push([Number(property), value]);
		return true;
	},
};

function getSelectionSortAnimations(arr) {
	pivots = [];
	arr = new Proxy(arr, handler);
	selectionSort(arr);
	return pivots;
}

export default getSelectionSortAnimations;
