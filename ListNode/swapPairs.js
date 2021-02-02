/**
 24 两两交换链表中的节点
 给定一个链表，两两交换其中的相邻节点，并返回交换后的链表
 你不能只是单纯的改变节点内部的值，而是需要实际进行交换

 输入 head=[1,2,3,4] 输出[2,1,4,3]
 输入 head=[] 输出 []
 输入 head=[1] 输出 [1]
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 思考: 两两交换 需要将node的next 的指针也进行交换
 存储变量 存储一个需要交换的变量
 要求是 返回交换后的链表
 */

// 交换节点 往后继续进行
const swapParis1=(head)=>{
  const initHead = new ListNode(0);
  initHead.next = head;
  let temp = initHead;
  while (temp.next!=null && temp.next.next!==null){
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp=node1;
  }
  return initHead.next;
}


// 递归的方式  当前节点和下一个节点进行交换
// 终止条件 当前节点为空 或者是当前的节点的下一个节点为空
const swapParis = (head)=>{
  if(head ==null ||  head.next ==null){
    return head;
  }
  const next = head.next;
  head.next = swapParis(next.next);
  next.next = head;
  return next;
}


const head = new ListNode(1);
const node1 = new ListNode(2);
const node2 = new ListNode(3);
const node3 = new ListNode(4);

head.next = node1;
node1.next = node2;
node2.next = node3;

console.log(swapParis(head))