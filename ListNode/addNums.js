/**
 2 两数相加
 给出两个非空的链表用来表示两个非负的整数，其中，它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字
 如果 我们将这个数相加起来，则会返回一个新的链表来表示它们的和
 您可以假设除了数字0之外，这两个数都不会以0开始


 输入 2->4->3 + 5->6->4
 输出 7->0->8 
 原因 342+456=807
 */


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class NodeList {
  constructor(item) {
    this.head = new Node(item);  // 初始化表头
  }

  // 增
  append = (element) => {
    let node = new Node(element);
    if (this.head.element == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (!current.next) {
        current.next = node;
      }
    }
  }

  // 查找node
  find = (element) => {
    debugger;
    let curNode = this.head;
    console.log(123, curNode.element)
    while (curNode.element != element) {
      curNode = curNode.next;
    }
    return curNode;
  }

  // 插入位置
  insert = (newElement, element) => {
    const newNode = new Node(newElement);
    const curNode = this.find(element);
    newNode.next = curNode.next;
    curNode.next = newNode;
  }

  //展示节点
  display = () => {
    let curNode = this.head;
    let strList = [];
    while (curNode.next) {
      strList.push(JSON.stringify(curNode.element));
      curNode = curNode.next;
    }
    strList.push(JSON.stringify(curNode.element));
    return strList.join('->')
  }
}
/**
* Definition for singly-linked list.

*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function (l1, l2) {
  let node = new ListNode('head')
  let temp = node;
  let add = 0;
  let sum = 0;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    add = sum >= 10 ? 1 : 0;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  add && (temp.next = new ListNode(add));
  return node.next;
};

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}

const l2 = {
  val: 2,
  next: {
    val: 4,
    next: null
  }
}


console.log(addTwoNumbers(l1, l2))