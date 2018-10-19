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
    while(pos.next) {
        if(pos.val === pos.next.val){
            remove(pos.val)
        }
        pos = pos.next
    }
};
function remove(item, head) {
    var preNode = findPre(item, head)
    if(preNode.next) {
        preNode.next = preNode.next.next
    }
}
function findPre(item, head) {
    var curNode = head
    while(curNode.next && curNode.next.val !== item) {
        curNode = curNode.next
    }
    return curNode
}

const LList = require('./data_structures&algorithms/linkedList')
var lists = new LList()
lists.insertEnd(1,'head')
lists.insertEnd(1,1)
lists.insertEnd(1,1)
/*lists.insertEnd(3,2)
lists.insertEnd(3,3)*/

deleteDuplicates(lists.head)
lists.display()