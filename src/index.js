module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix) && matrix.length) {
        return matrix.reduce((b, a, c) => c % 2 !== 0 ? b.concat(a.reverse()) : b.concat(a));
    } else {
        return [];
    }
}
