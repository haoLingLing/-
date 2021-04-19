/**
 23 合并K个升序链表
 给你一个链表数组，每个链表都已经按升序排列
 请你将所有的链表合并到一个升序链表中 返回合并后的链表

 示例
 输入 lists=[[1,4,5],[1,3,4],[2,6]]
 输出 [1,1,2,3,4,4,5,6]

 输入 lists=[]  
 输出 []

 输入 lists=[[]]
 输出 []


 提示： list[i] 按照升序排列
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

 /**
  * @param {ListNode[]} 
  * @return ListNode
  */


  // 结果是什么： 找到一个升序的链表
  // 步骤是什么 所有的循环递归
  // 判断的标准是什么  所有的子链表遍历完成

const mergeTwoLists = (l1, l2) => {
  let newHead = new ListNode(0);
  let prev = newHead;
  while (l1 != null && l2 !== null) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 == null ? l2 : l1;
  return newHead.next;
}

// 时间复杂度 O(k^2n)  顺序合并
 const mergeKLists1 =(lists)=>{
   if (lists.length) return []
   if (lists.length === 1) return lists[0]
   let queue = new ListNode(-Infinity);
    for(let i =0;i<lists.length;i++){
      queue = mergeTwoLists(queue, lists[i])
    }
   return queue.next
 }

const merge = (lists,l,r)=>{
  if(l ===r){
    return lists[l]
  }
  if(l>r){
    return null;
  }
  let mid = (l+r)>>1;
  const l1 = merge(lists[l], lists[mid]);
  const l2 = merge(lists[mid + 1], lists[r]);
  return mergeTwoLists(l1, l2)
 }

 // 分而治之 就是将顺序的队列 不在存在，直接将分组返回 进行一个递归  分到最小 减少顺序排序的问题 和快排的思想是一致的
const mergeKLists=(list)=>{
  return merge(lists,0,lists.length-1)
}

// 优先队列  





const l1 = new ListNode(1);
const l11 = new ListNode(4);
const l12 = new ListNode(5);
l1.next = l11;
l11.next = l12;

const l2 = new ListNode(1);
const l21 = new ListNode(3);
const l22 = new ListNode(4);

l2.next = l21;
l21.next = l22;

const l3 = new ListNode(2);
const l31 = new ListNode(6);
l3.next = l31;

const lists = [l1,l2,l3];

console.log(mergeKLists(lists))



 /**
  分治算法 
  如： 快排 归并排序
  */

// 参考地址
// https://leetcode-cn.com/problems/merge-k-sorted-lists/solution/23-he-bing-kge-pai-xu-lian-biao-by-alexer-660/