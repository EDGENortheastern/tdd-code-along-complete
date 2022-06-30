const numToRoman = (num) => {
// From 5 up we need to start with V, then append Is
    const unit = 'I';
    let remaining = num;
    let result = '';
    if (remaining >= 9) {
        result += 'IX';
        remaining -= 9;
    } else if (remaining >= 5) {
        result += 'V';
        remaining -= 5;
    } else if (num === 4) {
        result += 'IV';
        remaining -= 4;
    }
    result += `${unit.repeat(remaining)}`;
    return result;
}

module.exports = { numToRoman }