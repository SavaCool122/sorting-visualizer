export const generateCards = ({ width = 250, height = 250 }) => {
	const cardSize = 25
	const cardsInRow = width / cardSize
	const cardsInColumn = height / cardSize
	const fillSizes = (_, index) => -(index * cardSize)
	const xCordsList = Array(cardsInRow).fill(0).map(fillSizes)
	const yCordsList = Array(cardsInRow).fill(0).map(fillSizes)

	const cordsList = yCordsList
		.map((yCord, yIndex) =>
			xCordsList.map((xCord, xIndex) => ({ id: Number(`${yIndex}${xIndex}`), x: xCord, y: yCord }))
		)
		.flat()

	return cordsList
}

console.log(generateCards({}))
