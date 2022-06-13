import {Colors, ANIMATION_SPEED} from "./constants";
import sortMethodsMap from "./sort-methods/sortMethodsMap"

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const delay = (time = 0) => new Promise((resolve) => setTimeout(resolve, time));

export async function animationStep(animation, bars) {
  const [position, value] = animation;
  const barStyle = bars[position].style;

  await delay(ANIMATION_SPEED)
  barStyle.backgroundColor = Colors.SECONDARY_COLOR
  await delay(ANIMATION_SPEED)
  barStyle.height = `${value}px`
  await delay(ANIMATION_SPEED)
  barStyle.backgroundColor = Colors.PRIMARY_COLOR;
}

export async function playSortAnimation(animations, bars) {
  for (const animation of animations) {
    await animationStep(animation, bars);
  }
}

export function getSortMethods(type) {
  const sortMethod = sortMethodsMap[type]
  if (!sortMethod) throw new Error("Sort don't found")
  return sortMethod
}
