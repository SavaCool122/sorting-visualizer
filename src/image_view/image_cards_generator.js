export const generateCards = ({ width = 250, height = 250 }) => {
	const cardSize = 25
	const cardsInLine = width / cardSize
	const fillSizes = (_, index) => -(index * cardSize)
	const xCordsList = Array(cardsInLine).fill(0).map(fillSizes)
	const yCordsList = Array(cardsInLine).fill(0).map(fillSizes)

	return yCordsList
		.map((yCord, yIndex) =>
			xCordsList.map((xCord, xIndex) => ({ id: Number(`${yIndex}${xIndex}`), x: xCord, y: yCord }))
		)
		.flat()
}
