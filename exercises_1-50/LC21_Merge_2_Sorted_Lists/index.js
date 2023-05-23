/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let merged = {next: null};
    let tail = merged;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            tail.next = list1;
            tail = tail.next;
            list1 = list1.next;
        } else {
            tail.next = list2;
            tail = tail.next;
            list2 = list2.next;
        }
    }
    tail.next = list1 || list2;
    return merged.next;
}

// runtime 69ms
// memory 43.8MB

// with tempNode

var mergeTwoLists = function(list1, list2) {
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;
    return tempNode.next;
}

//runtime 73ms
// memory 44.7 MB
// both have O(m+n) where m and n length of each list