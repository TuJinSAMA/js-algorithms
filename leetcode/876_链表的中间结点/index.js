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
var middleNode = function(head) {
  let slow = head, fast = head, current = head;
  let mid = 0;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    mid++;
  }
  let count = 0
  while (count < mid) {
    current = current.next;
    count++;
  }
  return current
};