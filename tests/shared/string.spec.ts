import { StringUtils } from '@/shared'

describe('StringUtils', () => {
  it('should return true if it is a valid string', () => {
    expect(StringUtils.isValid('valid_string')).toBeTruthy()
  })

  it.each([null, undefined])('should return false if it is an invalid string', (value) => {
    expect(StringUtils.isValid(value)).toBeFalsy()
  })

  it('should return true if the string is between the character range', () => {
    expect(StringUtils.isBetween({ value: 'any_string', min: 1, max: 10 })).toBeTruthy()
  })

  it('should return false if the string is not between the character range', () => {
    expect(StringUtils.isBetween({ value: 'any_string', min: 20, max: 100 })).toBeFalsy()
  })

  it('should return only the numbers in the string', () => {
    const onlyNumbers = StringUtils.onlyNumbers('string_with_numbers_29492')
    expect(onlyNumbers).toBe('29492')
  })

  it.each([
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '+',
    '=',
    '{',
    '}',
    '[',
    ']',
    '|',
    '\\',
    ':',
    ';',
    '"',
    "'",
    '<',
    '>',
    ',',
    '.',
    '/',
    '?',
  ])('should return true if the character is a special character', (character) => {
    expect(StringUtils.isSpecialCharacter(character)).toBeTruthy()
  })

  it('should return only the uppercase characters in the string', () => {
    const onlyUppercase = StringUtils.onlyUppercase('string_With_UPPercase')
    expect(onlyUppercase).toBe('WUPP')
  })
})
