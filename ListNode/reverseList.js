/**
 206 反转链表
 1-2-3-4-5 ->null
 5-4-3-2-1 ->null
 */


 function ListNode(val){
  this.val = val;
  this.next = null;
 }


 //简单的将头节点 设置为null
 // 找到当前节点 和下一个节点  
 // 需要使用一个临时变量来存储 当前节点的下一个节点 将当前节点。next指向之前节点  更新当前节点 和 前一个节点
 // 时间复杂度O(n) 空间复杂度O(1)

const reverseList1 = (head)=>{
  let  prev = null; // 尾节点 指向null
  let curr  = head;
  while (curr!==null){
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev
}




const reverseList=(head)=>{
  // 结束条件 当前节点为空 或者是 当前节点的下一个节点为空 只需要将当前节点返回 
  // head ==null 表示的循环的空节点 
  // head.next 表示的如果只有一个节点 则不需要反转
  if(head ==null || head.next ==null){
    return head
  }

  let p = reverseList(head.next);
  // 反向操作  a->b->c  a.next = b b.next 反向指回 a 
  head.next.next =head;
  // 然后将 a->b->c 其实就是一个断链的操作;
  head.next = null;
  return p;
}


// 链表的操作就是循环 和 递归
// 链表的指向就是将next 指向和解绑的操作  将其的next置为空  
// 递归就是本身原子操作 一直循环 找到结束条件 
 
