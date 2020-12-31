/**
 环形链表
 给定一个链表，判断链表中是否有环 

 如果链表中有某个节点，可以通过练习跟踪next 指针再次到达，则链表中存在环，为了表示给定链表中的环，我们使用整数 pos 来表示链表尾链接到链表中的位置 索引从0 开始，如果pos 是-1，则在链表中没有环，注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况

 如果链表中存在环 则返回 true  否则 则返回false

  进阶  可以使用O(1) 即常量 解决此问题么


输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。

 */

/**
 *  思考 ：需要判断是不是环 则需要一个快慢指针
 * k 前进一步 
 * j 前进二步
 * 结束条件
 *  1 如果j指向的是 尾指针为null 则为false
 *  2 如果 k和j 相等 则为相等
 * 如果从头节点开始是环，多走的步数，即为k 环的长度也为k 
 * 假设相遇距环的起点距离为m，那么换的起点距头节点head的距离为k-m 也就是说如果从head 前进k-m 步就能达到环起点
 * 如果从相遇带你前进k-m 步，也恰好到达环起点
 * 到达相遇点之后 快慢指针之后的任意一个重新指向head ，然后两个指针同速前进，k-m 步就会相遇，相遇的位置就是起点了
 */


/**
 * 
 * @param {listNode} head 
 * @return {boolean}
 */

// 链表node节点
function listNode(node) {
  this.val = node;
  this.next = null;
}

 const hasCycle = function(head){
   if(head == null || head.next == null){
     return false;
   }
   let slow = head;
   let fast = head.next;
   while(slow!== fast){
     if (fast == null || fast.next == null){
       return false;
     }
     slow = slow.next;
     fast = fast.next.next;
   }
   return true
 }

 // 使用hashMap 判断
const hasCycle1 =function(head){
  const hashMap={}
  if (head == null || head.next == null) {
    return false;
  }
  while (head!==null && head.next !==null){
    // 为了保证value 相等，但是不是一个节点 
    // value 相等  next的value 也相等
    if (hashMap[head.val] === head.next.val){
      return true;
    }
    // 赋值 创建一个hash 表
    hashMap[head.val] = head.next.val;
    // head 的 head.next
    head = head.next;
  }
  return false;
}

const hasCycle2 = function (head) {
  const hashMap = new Map()
  if (head == null || head.next == null) {
    return false;
  }
  while (head !== null && head.next !== null) {
    if (hashMap.get(head.val)===head.next.val) {
      return true;
    }
    hashMap.set(head.val,head.next.val)
    head = head.next;
  }
  return false;
}



const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(hasCycle2(node1))



/*
总结  判断是环形，但是如果判断环形的位置的话，需要计算
*/

 

 

