function checkRange(num) {
    const MAX_NUMBER = Math.pow(2, 31) - 1;
    const MIN_NUMBER = Math.pow(-2, 31);
    return num > MIN_NUMBER && num < MAX_NUMBER;
} // checks if number within signed integer