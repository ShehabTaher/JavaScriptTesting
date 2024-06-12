import { expect, it } from "vitest"
import { add } from "./math"

it('should summarize all number values in array', () => {
  // Arrange
  const number = [1, 2]

  // Act
  const result = add(number)

  // Assert
    const expectedResult = number.reduce(
      (prevValue, curValue) => prevValue + curValue , 0
    )
  expect(result).toBe(expectedResult)
})

it('should yield NaN if a least one invalid number is provider', () => {
  // Arrange
  const inputs = ['invalid',1]

  // Act
  const result = add(inputs)

  // Assert
  expect(result).toBeNaN()

})

it('should yield a correct sum if an array of numeric string', () => {
  // Arrange
  const numbers = ['1', '2']

  // Act
  const result = add(numbers)

  // Assert
   const expectedResult = numbers.reduce(
      (prevValue, curValue) => +prevValue + +curValue , 0
    )
  expect(result).toBe(expectedResult)
})

it('should yield 0 if an empty array is provided', () => {
  // Arrange
  const numbers = []

  // Act
  const result = add(numbers)

  // Assert
  expect(result).toBe(0)
})

it('should throw an error if no value is passed into the function', () => {
  // try {
  //   const result = add()
  // } catch(error){
  //   expect(error.message).toBeDefined('Invalid input - must not be empty.')}

  const resultFn = () => {
    add()
  }
  expect(resultFn).toThrow(/is not iterable/)
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
  // Arrange
  const num1 = 1
  const num2 = 2
 // Act
  const resultFn = () => {
    add(num1, num2)
  }

  // Assert
  expect(resultFn).toThrow(/is not iterable/)
})