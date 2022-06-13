let swapped
let pivots = []

const handler = {
  apply: function (target, thisArg, argumentsList) {
    return thisArg[target].apply(this, argumentsList);
  },
  deleteProperty: function (target, property) {
    console.log("Deleted %s", property);
    return true;
  },
  set: function (target, property, value, receiver) {
    target[property] = value;
    pivots.push([Number(property), value])
    return true;
  }
}

function bubbleSort(arr) {
  swapped = false
  let end = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      swapped = true
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }
  end--
}

function getBubbleSortAnimations(arr) {
  pivots = []
  arr = new Proxy(arr, handler)
  do {
    bubbleSort(arr)
  } while (swapped)
  return pivots
}

export default getBubbleSortAnimations