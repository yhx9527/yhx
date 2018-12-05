/**
 *题目
 */
// Given a sorted linked list, delete all duplicates 
// such that each element appear only once.
// 删除给定链表中的重复数字
/*Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let pos = head
    while(pos && pos.next) {
        if(pos.val === pos.next.val){
             pos.next = pos.next.next
        } else {
             pos = pos.next  
        }
    }
  return head  
};

var deleteDuplicates1 = function(head) {
    let pos = head
    let temp = new ListNode(-1)
    let pre = temp
    while(pos) {
        let flag = false
        while(pos.next && pos.val === pos.next.val){
             pos.next = pos.next.next
             flag = true
         }
        if(flag){
            pre.next = pos.next
            pos = pos.next
        }else{
            pre = pos
            pos = pos.next
        }
    }
    return  temp.next
};
