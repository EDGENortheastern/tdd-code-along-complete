const numToRoman = (num) => {
    return num === 1 ? 'I' : num === 2 ? 'II' : 'III';
}

module.exports = { numToRoman }