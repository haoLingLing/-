function Node(data, left, right) {
  this.val = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.val
};

// 方法： 
// 插入操作
// 中序遍历
// 获取最大值
// 获取最小值
// 查找特定值
// 删除方法
class BST {
  constructor(data) {
    this.root = null;
    for (let i = 0; i < data.length; i++) {
      this.insert(data[[i]])
    }
  }

  show = () => {
    console.log(this.root)
  }

  insert = (data) => {
    const node = new Node(data, null, null);
    if (this.root == null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        // 如果小于parent.data
        if (data < parent.val) {
          current = current.left;
          // 如果等于空
          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  // 中序遍历 坐节点 根 右节点
  inOrder = (current) => {
    if (current !== null) {
      this.inOrder(current.left);
      console.log(current.val);
      this.inOrder(current.right)
    }
  }

  // 先序
  preOrder = (current) => {
    if (current !== null) {
      console.log(current.val);
      this.preOrder(current.left);
      this.preOrder(current.right)
    }
  }

  // 后序
  postOrder = (current) => {
    if (current !== null) {
      this.preOrder(current.left);
      this.preOrder(current.right);
      console.log(current.val);
    }
  }

  // 查找最小值
  getSmallest = () => {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current.left !== null) {
      current = current.left
    }
    return current;
  }

  // 查找最大值
  getBiggest = () => {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current.right !== null) {
      current = current.right
    }
    return current.data;
  }

  // 删除一个元素
  // 删除叶子节点
  // 删除一个只有节点的元素
  // 删除只有多个节点的元素
  remove = (data) => {
    this.removeNode(this.root, data)
  }

  // 循环体
  removeNode = (node, data) => {
    if (node == null) {
      return null;
    }
    // 找到当前节点
    if (data == node.val) {
      if (node.left === null && node.right == null) {
        return null;
      }
      // 只有右节点
      if (node.left === null) {
        return node.right
      }
      // 只有左节点
      if (node.right == null) {
        return node.left
      }
      // 找到当前最小的节点 最小的节点变为当前节点
      let tempNode = this.getSmallest(node.right);
      node.val = tempNode.val;
      // 然后移除 当前的最小的节点
      node.right = this.removeNode(node.right, tempNode.val)
      return node;
    } else if (data < node.val) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.left = this.removeNode(node.right, data);
      return node;
    }
  }

  // 查找节点
  find = (node) => {
    let current = this.root;
    while (current !== null) {
      if (node < current.left) {
        current = current.left;
      } else if (node > current.right) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null; // 遍历完整个树没有找到，返回null
  }
}


// export default BST;

// const nums = [3, 16, 22, 45, 2, 5, 35, 13]
// const bst = new BST(nums);
// bst.inOrder(bst.root);
// // bst.insert(70);
// // console.log(bst.getSmallest())
// // console.log(bst.getBiggest())
// // bst.show()
// // console.log()
// bst.remove(45);
// bst.inOrder(bst.root);