/**
 * 142 环形链表
 * 给定一个链表，返回链表开始如环的第一个节点，如果链表无环，则返回null
 * 为了表示给定链表中的环，我们使用整数pos 来表示链表尾链接到链表中的位置，索引从0开始，如果pos 是-1，则在该链表中没有环，注意，pos 仅仅用于标识环的情况，并不会作为参数传递到函数中
 * 不允许修改给定的链表
 *
   示例 1：
    输入：head = [3,2,0,-4], pos = 1
    输出：返回索引为 1 的链表节点
    解释：链表中有一个环，其尾部连接到第二个节点。
   示例 2：
      输入：head = [1,2], pos = 0
      输出：返回索引为 0 的链表节点
      解释：链表中有一个环，其尾部连接到第一个节点。
   示例 3：
      输入：head = [1], pos = -1
      输出：返回 null
      解释：链表中没有环。
 */


 /**
  审题 链表 结果 需要返回的是环的第一个节点 
  1 判断是不是环链表
    如果是环 返回环后的第一个节点，
    如果不是环 则返回null
 */




function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 
 * @param {listNode} head 
 * @return {listNode}
 */

 // 暴力没法 hashMap 存储在hashMap 中
const detectCycle = (head)=>{
  const hashMap = new Map();
  if(head === null || head.next === null){
    return null;
  }

  // 进入循环体 判断条件是 head 不为null 并且head.next 不为null
  while(head!==null && head.next!==null){
    // 判断条件
    if (hashMap.get(head.val)===head.next.val){
      return head;
    }
    hashMap.set(head.val, head.next.val)
    head = head.next;
  }

  return null;
}


// 快慢指针
const detectCycle1 =(head)=>{
  if (head == null || head.next == null) {
    return null;
  }
  let slow = head;
  let fast = head.next;
  // 在这一次需要判断是否是链表是否是一个环
  // 第一次相遇 走了 k步
  while (slow !== fast) {
    if (fast == null || fast.next == null) {
      return null;
    }
    // 慢的走一步
    slow = slow.next;
    // 快的走两步
    fast = fast.next.next;
  }

  // 如果是一个环的话才能往下走
  // 将fast 等于head 同速走，如果再次相遇，就是环的起点
  fast = head;
  slow = slow.next;
  while (slow !== fast){
    // 快慢同速走 
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(detectCycle1(node1))
