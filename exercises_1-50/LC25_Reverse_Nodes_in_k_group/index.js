/**
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let stack = [];
    let node = new ListNode(null);
    let temp = node;
    
    while(head) {
        for(let i = 0; i < k && head; i++) {
            stack.push(head);
            head = head.next;
        }
        
        if(stack.length === k) {
            while(stack.length > 0) {
                temp.next = stack.pop();
                temp = temp.next;
            }
            temp.next = head;
        }
    }
    return node.next;
};


//runtime 75 ms
// memory 46.5 MB