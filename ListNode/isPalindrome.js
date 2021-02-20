/**
 234 回文链表
 请判断一个链表是不是回文链表
 输入 1->2 
 输出 false

 输入 1->2->2->1
 输出 true

 输入 1
 输出 true
 */


 function ListNode(val){
  this.val = val;
  this.next = null;
 }

const reverseList = (head) => {
  let prev = null; // 尾节点 指向null
  let curr = head;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev
}


const endOfFirstHalf=(head)=>{
  let slow = head;
  let fast = head.next;
  while (fast.next !== null && fast.next.next !== null) {
    solw = slow.next;
    fast = fast.next.next;
  }
  return solw
}


 // 回文对应的就是 12321 1221 快慢指针 121

 // 时间复杂度 O(3n) 空间复杂度O(1)
const isPalindrome=(head)=>{
  // 空链表
  if (head == null || head.next == null) {
    return true;
  }
  // 找到中间的链表
  const firstHalfEnd = endOfFirstHalf(head);
  // 修改slow  反转链表
  const secondHalfStart = reverseList(firstHalfEnd.next);
  
  
  let p1 = head;
  let p2 = secondHalfStart;

  while (p2!== null){
    if (p1.val != p2.val){
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
}

const head = new ListNode(1);
const node1 = new ListNode(2);
const node2 = new ListNode(3); 
const node3 = new ListNode(4);
const node4 = new ListNode(1);

head.next = node1;
// node1.next = node2;
// node1.next = node3;
// node3.next = node4;


console.log(isPalindrome(head))


// 快慢指针