import { DateUtils } from '@/shared'

describe('DateUtils', () => {
  it('should return true if it is a valid date', () => {
    expect(DateUtils.isValid(new Date()))
  })

  it.each([null, undefined, '20/02/2023', new Date('invalid_date')])(
    'should return false if it is an invalid date',
    (value) => {
      expect(DateUtils.isValid(value)).toBeFalsy()
    },
  )
})
