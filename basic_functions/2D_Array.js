function setup2DArray (n,m) {
    const matrix = new Array(n).fill(0).map(row => new Array(m).fill(0));
    return matrix;
}