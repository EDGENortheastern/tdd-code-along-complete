// Imports function numToRoman from index.js 👇
const { numToRoman } = require('./index');

// Smoke test 👇
test('that Jest is working', () => {
    expect(2+2).toBe(4);
});

// First describe block 👇
describe('test that numbers 1-5 are converted as expected', () => {
    it('tests that 1 is "I"', () => {
        expect(numToRoman(1)).toBe("I");
    });
    it('tests that 2 is "II"', () => {
        expect(numToRoman(2)).toBe("II");
    });
    it('tests that 3 is "III"', () => {
        expect(numToRoman(3)).toBe("III");
    });
    it('tests that 4 is "IV"', () => {
        expect(numToRoman(4)).toBe("IV");
    });
    it('tests that 5 is "V"', () => {
        expect(numToRoman(5)).toBe("V");
    });
});

// Second describe block 👇
describe('test that numbers 5-10 are converted as expected', () => {
    it('tests that 6 is "VI"', () => {
        expect(numToRoman(6)).toBe("VI");
    });
    it('tests that 7 is "VII"', () => {
        expect(numToRoman(7)).toBe("VII");
    });
    it('tests that 8 is "VIII"', () => {
        expect(numToRoman(8)).toBe("VIII");
    });
    it('tests that 9 is "IX"', () => {
        expect(numToRoman(9)).toBe("IX");
    });
    it('tests that 10 is "X"', () => {
        expect(numToRoman(10)).toBe("X");
    });
});

// Third describe block 👇
describe('test that numbers above 10 but below 40 are converted as expected', () => {
    it('tests that 19 is "XIX"', () => {
        expect(numToRoman(19)).toBe("XIX");
    });
    it('tests that 11 is "XI"', () => {
        expect(numToRoman(11)).toBe("XI");
    });
    it('tests that 32 is "XXXII"', () => {
        expect(numToRoman(32)).toBe("XXXII");
    });
    it('tests that 33 is "XXXIII"', () => {
        expect(numToRoman(33)).toBe("XXXIII");
    });
    it('tests that 34 is "XXXIV"', () => {
        expect(numToRoman(34)).toBe("XXXIV");
    });
    it('tests that 35 is "XXXV"', () => {
        expect(numToRoman(35)).toBe("XXXV");
    });
    it('tests that 39 is "XXXIX"', () => {
        expect(numToRoman(39)).toBe("XXXIX");
    });
});