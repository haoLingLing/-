

// 队列 层序遍历 广度优先 非递归形式的层序遍历
const averageOfLevels1 = (root) => {
  // 存储结果
  const result = [];
  // 新建一个队列 存储每一层的数据 边存储边运算
  const listaArray = [];
  listaArray.push(root)
  while (listaArray.length !== 0) {
    const length = listaArray.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      const currentNode = listaArray.shift();
      sum += currentNode.val;
      if (currentNode.left !== null) {
        listaArray.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        listaArray.push(currentNode.right);
      }
    }

    result.push(sum / length)
  }
  return result;
}


// // 深度优先
const averageOfLevels = (root) => {

  const dfs = (root, level) => {
    if (root == null) return;
    // 当前的val 值 
    result[level] = (result[level] || 0) + root.val;
    size[level] = (size[level] || 0) + 1;
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }

  // 或者存储在两个数据当中 一个存储当前的sum,一个是存储当前的count 值
  const result =[];
  const size=[];
  dfs(root,0);
  // 深度遍历查找当前的节点是在第几层 然后去做

  for(let i =0;i<result.length;i++){
    result[i] = result[i] /size[i]
  }

  return result;
}

const bst = new BST([10, 3, 5, 12, 4, 15]);
console.log(bst.root)
console.log(averageOfLevels(bst.root))