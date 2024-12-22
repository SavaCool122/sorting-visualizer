import clsx from 'clsx/lite'

/** @param {...import('clsx').ClassValue} inputs */
export const cn = (...inputs) => {
	return clsx(inputs)
}
