function isValid(value: unknown): value is string {
  return typeof value === 'string'
}

type IsBetweenInput = {
  value: unknown
  min: number
  max: number
}

function isBetween({ value, min, max }: IsBetweenInput): boolean {
  if (!isValid(value)) return false
  return value.length >= min && value.length <= max
}

function onlyNumbers(value: string): string {
  return value.replace(/[^0-9]/g, '')
}

function isSpecialCharacter(character: string): boolean {
  return [
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
  ].includes(character)
}

function onlyUppercase(value: string): string {
  return value.replace(/[^A-Z]/g, '')
}

export const StringUtils = {
  isValid,
  isBetween,
  onlyNumbers,
  isSpecialCharacter,
  onlyUppercase,
}
