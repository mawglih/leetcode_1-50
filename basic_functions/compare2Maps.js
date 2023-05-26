function compare (map1, map2) {
    for(let [key, val] of  map2){
        if(map1.get(key) !== map2.get(key)) return false;
    }
    return true;
}