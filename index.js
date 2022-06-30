const arabic = [10, 9, 5, 4, 1];
const roman = ['X', 'IX', 'V', 'IV', 'I'];

const numToRoman = (num) => {
    let result = '';
    arabic.map((value, index) => {
        while (num >= value) {
            result += roman[index];
            num -= value;
        }
    });
    return result;
}

module.exports = { numToRoman }