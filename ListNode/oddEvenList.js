/**
  奇偶链表
  给定一个单链表，把所有的奇数节点和偶数节点分别排在一起，请注意： 这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的奇偶性

  请尝试使用原地算法完成，算法空间复杂度O(1)  时间复杂度为O(nodes) nodes 为节点总数

  输入 1->2->3->4->5 ->null  
  输出 1->3->5->2->4 ->null

  输入 2->1->3->5->6->4->7 ->null
  输出 2->3->5->6->4->7->null
 */


 function ListNode(val){
  this.val = val;
  this.next = null
 }


 // 暴力法 时间复杂度O(n) 空间复杂度O(1)
var oddEvenList = function (head) {
  if (head === null) {
    return head;
  }
  let evenHead = head.next;
  let odd = head, even = evenHead;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

const head = new ListNode(1);
const node1 = new ListNode(2);
const node2 = new ListNode(3);
const node3 = new ListNode(4);
const node4 = new ListNode(6);



head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;


console.log(oddEvenList(head))

