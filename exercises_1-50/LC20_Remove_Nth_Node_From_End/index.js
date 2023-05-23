/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
/**
 * Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5] */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let newList = head;
    let nodeCount = 0;
    while(newList !== null) {
        nodeCount++;
        newList = newList.next;
    }
    let num = nodeCount - n;
    if(nodeCount === 1 ) return null;
    if (num === 0) return head.next;
    let counter = 1;
    let current = head;
    while(counter < num) {
        current = current.next;
        counter++;
    }
    current.next = current.next.next;
    return head;
};

// runtime 60ms
// memory 43.5 MB