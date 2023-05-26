/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let swapped = new ListNode(null);
    swapped.next = head;
    let prev = swapped;
    while (head && head.next) {
        let n1 = head
        let n2 = head.next
        prev.next = n2
        n1.next = n2.next
        n2.next = n1
        prev = n1
        head = n1.next
    }
    return swapped.next;
};

// runtime 51 ms
// memory 42.4 MB