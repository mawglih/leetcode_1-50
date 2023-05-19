const convertListToArray = listNode => {
    let arr = [];
    if(listNode.next != null) {
      arr = arr.concat(convertListToArray(listNode.next));
    };
    arr.push(listNode.val);
    return arr;
  }