const numToRoman = (num) => {
    const unit = 'I';
    if (num === 5) {
        return 'V';
    } else if (num === 4) {
        return 'IV';
    } else {
        return `${unit.repeat(num)}`;
    }
}

module.exports = { numToRoman }