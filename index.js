const numToRoman = (num) => {
    const unit = 'I';
    return `${unit.repeat(num)}`;
}

module.exports = { numToRoman }