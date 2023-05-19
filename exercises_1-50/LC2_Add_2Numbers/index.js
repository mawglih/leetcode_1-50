/**You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

/**
* Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const convertListToArray = listNode => {
    let arr = [];
    if(listNode.next != null) {
      arr = arr.concat(convertListToArray(listNode.next));
    };
    arr.push(listNode.val);
    return arr;
  }
  const l1Arr = convertListToArray(l1);
  const l2Arr = convertListToArray(l2);
  let total = BigInt(l1Arr.join('')) + BigInt(l2Arr.join(''));
  let stTotal = total.toString().split('');
  let joinedList = null;
  for(let i = 0; i < stTotal.length; i++) {
    joinedList = {
      val: stTotal[i],
      next: joinedList
    };
  }
  return joinedList;
};

//Runtime 118 ms
// Memory 49.7
