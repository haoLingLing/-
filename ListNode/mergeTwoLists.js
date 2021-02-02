/**
 21 合并两个有序链表
 将两个升序链表合并为一个新的升序链表并返回 新链表是通过拼接给定的两个链表的所有节点组成的

 输入 l1=[1,2,4] l2=[1,3,4]
 输出 [1,1,2,3,4,4]

 输入 l1=[],l2=[]
 输出 []

 输入 l1=[],l2=[0]
 输出 [0]
  * 
 */

 /**
   思考 本身就是升序排列 
   原本一个链表 非递减顺序 
    l2 往l1 中插入进去
  */


function ListNode(val) {
  this.val = val;
  this.next = null;
}



 // 循环 p1<p2 插入节点 移动p1 p1>p2 移动节点p2
const mergeTwoLists1=(l1,l2)=>{
  let newHead = new ListNode(0);
  let prev = newHead;
  while(l1!=null && l2!==null){
    if(l1.val<l2.val){
      prev.next = l1;
      l1 = l1.next;
    }else{
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 == null ? l2 : l1;
  return newHead.next
}


// 递归
const mergeTwoLists =(l1,l2)=>{
  if(l1===null){
    return l1
  }else if(l2 ===null){
    return l2
  }else if(l1.val<l2.val){
    l1.next = mergeTwoLists(l1.next,l2);
    return l1
  }else{
    l2.next = mergeTwoLists(l1, l2.next);
    return l2
  }
}

const l1 = new ListNode(1);
const l12 = new ListNode(2);
const l13 = new ListNode(4);

l1.next = l12;
l12.next = l13;

const l2 = new ListNode(1);
const l22 = new ListNode(3);
const l23 = new ListNode(4);


l2.next = l22;
l22.next = l23;


console.log(mergeTwoLists(l1,l2))


/*
 总结:循环递归链表 
 先创建一个新的链表、新的节点、一直递归找到其链表， 插入、断开链表
*/