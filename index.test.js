const { numToRoman } = require('./index');

test('that Jest is working', () => {
    expect(2+2).toBe(4);
});

describe('test that numbers 1-5 convert as expected', () => {
    it('that 1 is "I"', () => {
        expect(numToRoman(1)).toBe("I");
    });
});