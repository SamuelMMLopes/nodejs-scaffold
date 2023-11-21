function isValid(value: unknown): value is number {
  return typeof value === 'number'
}

function isPositive(value: unknown): boolean {
  if (!isValid(value)) return false
  return value > 0
}

export const NumberUtils = {
  isValid,
  isPositive,
}
