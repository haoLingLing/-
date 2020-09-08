/**
 反转一个单链表。
 示例:
 输入：1->2->3->4->5->null
 输出：5->4->3->2->1->null

 进阶
 你可以迭代或者递归反转链表，你能否用两种方法解决这道题
 */

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
 * 时间复杂度O(n) 空间复杂度O(1)
 */

// var reverseList = function (head) {
//   let pre = null;
//   let cur = head;
//   while (cur!=null){
//     next = cur.next;
//     cur.next =pre;
//     pre = cur;
//     cur = next;
//   }
//   return pre
// };
display = (data) => {
  let curNode = data;
  let strList = [];
  while (curNode.next) {
    strList.push(JSON.stringify(curNode.element));
    curNode = curNode.next;
  }
  strList.push(JSON.stringify(curNode.element));
  return strList.join('->')
}

const reverseList = (head)=>{
  debugger;
  if(head == null || head.next ==null) return head;
  p = reverseList(head.next);
  head.next.next =head;
  head.next = null;
  return p
}

const a={
  val:5,
  next:{
    val:4,
    next:{
      val:3,
      next:{
        val:2,
        next:{
          val:1,
          next:null
        }
      }
    }
  }
}

console.log('end',reverseList(a))