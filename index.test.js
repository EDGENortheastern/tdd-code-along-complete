// Imports function numToRoman from index.js 👇
const { numToRoman } = require('./index');

// Smoke test 👇
test('that Jest is working', () => {
    expect(2+2).toBe(4);
});

// First describe block 👇
describe('test that numbers 1-5 convert as expected', () => {
    it('tests that 1 is "I"', () => {
        expect(numToRoman(1)).toBe("I");
    });
    it('tests that 2 is "II"', () => {
        expect(numToRoman(2)).toBe("II");
    });
});