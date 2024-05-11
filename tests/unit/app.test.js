import { describe, expect, test } from '@jest/globals'
import { add } from '../../src/app.js'
describe('add function', () => {
  test('should return 3 when 1 + 2', () => {
    expect(add(1, 2)).toBe(3)
  })
  test('should return 3 when 1 + 2', () => {
    expect(add(2, 2)).toBe(4)
  })
})
