/**
  382 链表随机节点
  给定一个单链表，随机选择链表的一个节点，并返回相应的节点值，保证每个节点被选的概率一样
  进阶
  如果链表十分大且长度未知，如何解决这个问题，能否使用常数级空间复杂度实现

  // 示例
  初始化一个单链表 [1,2,3]
  listNode head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  Solution.solution = new Solution(head);

  getRandom() 方法随机返回1,2,3 中的一个，保证每个元素被返回的概率相等
  solution.getRandom()
 */

 function ListNode(val,next){
   this.val = (val === undefined ?0 :val);
   this.next = (next === undefined ? null :next)
 }


 // head 是表头
 const Solution = function(head){
   this.head = head
 }

 /**
  * 返回的是 随机节点的value 值
  * @return {number}
  */

  // 题目表述的是在n个中选取1个数据 刚开始将头节点放入在正确的位置, 随机选取一次，如果正好选中0 ，则将当前的替换出去
 Solution.prototype.getRandom = function(){
   // 先放入蓄水池
   let res = this.head;
   let temp = this.head.next;
   let index = 1;
   // 当前遍历是需要将所有的元素都遍历一次 选中的概率* 不被替换出去的概率
   while (temp!==null){
     index++;
     // 在 [0,index] 中随机选取一次 如果选中 则返回数据 这里指的是被选入圈子的机会
    let random = Math.random() * (index)  >> 0; 
     // 选中自己的概率
     if (random === index){
       res = temp.val;
     }
     temp = temp.next;
   }
   return res.val;
 }




const head = new ListNode(1);
const node1 = new ListNode(2);
const node2 = new ListNode(3);
head.next = node1;
node1.next = node2;

 const obj = new Solution (head);
 const  param_1 = obj.getRandom();

console.log(123, param_1)



/**
 总结：蓄水池抽样算法
 假设数据序列为n，所抽样调查的样本为k
 1 先构建一个可容纳k个数据的数组，将序列前k个元素放入到数组中
 2 然后从K+1个数组元素开始，以概率为 k/n 是否被替换进入数组中（数组中的元素被替换的概率是相同的）遍历完所有的元素中，既可找到样本
 */