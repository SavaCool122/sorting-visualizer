function cocktailShakerSort(arr) {
	let isSorted = true;
	while (isSorted) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				isSorted = true;
			}
		}

		if (!isSorted) break;

		isSorted = false;

		for (let j = arr.length - 1; j > 0; j--) {
			if (arr[j - 1] > arr[j]) {
				let temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
				isSorted = true;
			}
		}
	}
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
let pivots = [];

export default function getCocktailShakerSortAnimations(items) {
	pivots = [];
	items = new Proxy(items, handler);
	if (items.length <= 1) return items;
	cocktailShakerSort(items);
	return pivots;
}
