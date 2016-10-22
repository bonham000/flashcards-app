import * as types from '../constants/actionTypes'

export const multiply = (num) => ({
	type: types.MULTIPLY,
	number: num
})

export const divide = (num) => ({
	type: types.DIVIDE,
	number: num
})

export const reset = (newNumber) => ({
	type: types.RESET,
	newNumber
})