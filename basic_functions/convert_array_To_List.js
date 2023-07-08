function linkedList(arr){
    return arr.reduceRight((next, value) => ({value, next}), null);
}