// 链表的增删改查

// 单链表

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


var cities = new NodeList();
console.log('cities', cities)
cities.append('beijing');
cities.append('shanghai');
cities.insert('tianjin', 'beijing');
console.log(cities.display())

 // 双向链表