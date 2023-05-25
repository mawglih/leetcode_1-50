/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    const merge = (l1, l2) => {
        if(l1 === null) return l2;
        if(l2 === null) return l1;
        if(l1.val < l2.val) {
            l1.next = merge(l1.next, l2);
            return l1;
        } else {
            l2.next = merge(l2.next, l1);
            return l2;
        }
    }
    for(let i = 1; i < lists.length; i++) {
        lists[0] = merge(lists[0], lists[i])
    }
    return lists[0];
}

// runtime 572 ms
//memory 48,8 MB