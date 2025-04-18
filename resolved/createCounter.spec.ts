import { createCounter } from './createCounter'

describe('createCounter', () => {
  it('should return 10 and increment by 1', () => {
    const counter = createCounter(10)
    expect(counter()).toBe(10)
    expect(counter()).toBe(11)
    expect(counter()).toBe(12)
  })

  it('should return -2 and increment by 1', () => {
    const counter = createCounter(-2)
    expect(counter()).toBe(-2)
    expect(counter()).toBe(-1)
    expect(counter()).toBe(0)
    expect(counter()).toBe(1)
    expect(counter()).toBe(2)
  })
})
