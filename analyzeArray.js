function analyzeArray(arr) {
    object = {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
    return object;
}

module.exports = analyzeArray;
