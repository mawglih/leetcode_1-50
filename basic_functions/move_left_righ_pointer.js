function movePointer(left,right, str) {
    let maxLength = 0;
    while(left >=0 && right < str.length && str[left] === str[right]) {
        const currLength = right - left + 1;
        if(currLength > maxLength) {
            maxLength = currLength;
            startIndx = left;
        }
        left -= 1;
        right += 1;
    }
}