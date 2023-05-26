function checkSubString(string, wordMap, wordLength) {
    let hashMap = new Map();
    for(let i = 0; i < string.length; i += wordLength){
        let sub = string.substring(i, i + wordLength);
        hashMap.set(sub, (hashMap.get(sub) || 0 ) + 1);
    }
    for(let [key, val] of  wordMap){
        if(hashMap.get(key) !== wordMap.get(key)) return false;
    }
    return true;
}