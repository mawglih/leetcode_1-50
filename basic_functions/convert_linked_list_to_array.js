const convertListToArray = listNode => {
    let arr = [];
    if(listNode.next != null) {
      arr = arr.concat(convertListToArray(listNode.next));
    };
    arr.push(listNode.val);
    return arr;
}

const convertListToArray2 = head => {
  let arr = [];
  let index = 0;
  while(head != null) {
    arr[index++] = head.val;
    head = head.next;
  }
  return arr;
}