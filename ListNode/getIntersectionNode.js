/**
 160 相交链表
 编写一个程序，找到两个单链表相交的起始节点
 如下面的两个链表
 
 示例1 
 输入 listA =[2,6,4] listB=[1,5]
 输出 null

  输入 listA =[4,1,8,4,5] listB=[5,0,1,8,4,5]
  输出 8 
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

//hashMap的存储数据 需要对比的是从相交之后的数据 如果都相等 才会是相加的数据
const getIntersectionNode1 = (headA, headB) => {
  if (!headA || !headB) return null;
  const headMap = new Map();
  // 先循环A  再循环B
  let temp = headA;
  while (temp) {
    headMap.set(temp, 1);
    temp = temp.next;
  }

  
  //  循环B
  let tempB = headB;
  while (tempB) {
    if (headMap.has(tempB)) {
      return tempB
    }
    tempB = tempB.next;
  }
}


// 正确的方式 对这个问题保留疑问
const getIntersectionNode = (headA, headB)=>{
  if (!headA || !headB) return null;
  let PA = headA;
  let PB = headB;

  while (PA!==PB) {
    PA = PA == null ? headB : PA.next;
    PB = PB == null ? headA : PB.next;
  }
  return PA
}

// 相加方式 两个指针一起走的方式
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  let PA = headA;
  let PB = headB;
 
  while(!(PA?.val == PB?.val && PA?.next?.val == PB?.next?.val)){
    PA = PA == null ? headB : PA.next;
    PB = PB == null ? headA : PB.next;
  }

  return PA?.next || null
}

const headA = new ListNode(4);
const node1 = new ListNode(1);
const node2 = new ListNode(8);
const node3 = new ListNode(4);
const node4 = new ListNode(5);

headA.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;



const headB = new ListNode(5);
const node11 = new ListNode(0);
const node21 = new ListNode(1);
const node31 = new ListNode(7);
const node41 = new ListNode(4);
const node51 = new ListNode(6);

headB.next = node11;
node11.next = node21;
node21.next = node31;
node31.next = node41;
node41.next = node51;


console.log(getIntersectionNode(headA, headB))


// 在js中 单向链表的方式  循环都是使用while的，判断当前的是否为null 为结束条件
// 快慢指针 快指针 2步 慢指针是1步， 最后如果是环的话，是可以相遇的  相遇的点是啥 如果起点距离环m，那么环的起点结点haed的距离为k-m，如果从相遇点再走k-m 步，也恰好到达起点，如果把其中的一个指针指向head ,如果两个指针再次相遇，k-m 会相遇，那么那个就是环的结点

// 寻找中点
// 寻找第K个点
