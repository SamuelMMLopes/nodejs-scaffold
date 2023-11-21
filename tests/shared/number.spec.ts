import { NumberUtils } from '@/shared'

describe('NumberUtils', () => {
  it('should return true if it is a valid number', () => {
    expect(NumberUtils.isValid(20)).toBeTruthy()
  })

  it.each([null, undefined, '20'])('should return false if it is an invalid number', (value) => {
    expect(NumberUtils.isValid(value)).toBeFalsy()
  })

  it('should return true if the number is positive', () => {
    expect(NumberUtils.isPositive(20)).toBeTruthy()
  })

  it.each([-20, 0])('should return false if the number is negative or zero', (value) => {
    expect(NumberUtils.isPositive(value)).toBeFalsy()
  })
})
