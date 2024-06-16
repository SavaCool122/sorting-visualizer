import clsx from 'clsx'

/** @param {...import('clsx').ClassValue} inputs */
export const cn = (...inputs) => {
	return clsx(inputs)
}
