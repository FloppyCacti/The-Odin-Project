const reverseString = require('../src/reverseString')

it('reversed', () => {
    expect(reverseString('test')).toBe('tset')
    expect(reverseString('something')).toBe('gnihtemos')
})

it('empty string', () => {
    expect(reverseString('')).toBe('')
})

it('space', () => {
    expect(reverseString(' ')).toBe('')
    expect(reverseString('   ')).toBe('')
})

it('string surrounded by spaces', () => {
    expect(reverseString(' test ')).toBe("tset")
    expect (reverseString('   t ')).toBe("t")
})