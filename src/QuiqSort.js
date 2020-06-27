let pivots = []
function partition(items, low, hi) {
  let pivotIdx = Math.floor((hi + low) / 2)
  let pivot = items[pivotIdx]
  while (low <= hi) {
    while (items[low] < pivot) {
      low++
    }
    while (items[hi] > pivot) {
      hi--
    }
    if (low <= hi) {
      //swap
      pivots.push([low, pivotIdx, hi])
      const temp = items[low]
      items[low] = items[hi]
      items[hi] = temp
      //swap end
      low++
      hi--
    }
  }
  return low
}

function quickSort(items, low = 0, hi = items.length - 1) {
  if (low < hi) {
    const index = partition(items, low, hi)
    pivots.push([])
    quickSort(items, low, index - 1)
    quickSort(items, index, hi)
  }
  return items
}

export function qSortHelper(items) {
  if (items.length <= 1) return items
  pivots = []
  quickSort(items)
  return pivots
}