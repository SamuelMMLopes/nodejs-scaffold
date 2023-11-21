function isValid(value: unknown): value is Date {
  if (value === null) return false
  return !isNaN(value as number)
}

export const DateUtils = {
  isValid,
}
