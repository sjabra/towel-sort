// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2) {
                matrix[i] = matrix[i].reverse();
            }
        }
        return [].concat(...matrix);
    }
    return [];
};
