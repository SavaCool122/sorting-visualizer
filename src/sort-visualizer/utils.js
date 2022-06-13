import sortMethodsMap from "./sort-methods/sortMethodsMap"

export function randomIntFromInterval(min = 5, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSortMethods(type) {
  const sortMethod = sortMethodsMap[type]
  if (!sortMethod) throw new Error("Sort don't found")
  return sortMethod
}

export function getRandomArray(length) {
  return Array.from({length}, () => randomIntFromInterval(5, 450))
}

export function getInitialAppConfig() {
  return {
    status: null,
    sort: null
  }
}
