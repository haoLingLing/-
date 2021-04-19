/**
 112 路径总和
 给你二叉树根节点root 和一个表示目标和的整数 targetSum 判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点的值相加等于目标和targetSum
 叶子节点是指没有子节点的节点
 输入：root = [1,2,3], targetSum = 5
 输出：false
 */

 // 递归结束条件是 查找到一个就可以结束
 // 所有的左子树 或者是 右子树中存在一条就可以
 // 时间复杂度O(N) 所有的节点都会遍历一次  空间复杂度O(N) 最坏的情况是类似于链表

// const hasPathSum=(root,targetSum)=>{
//   if(root===null) return false;
//   let sum = targetSum;
//   let currentData = root;
//   // 最后一个节点
//   if (root.left == null && root.right == null ){
//     return sum == currentData.val;
//   }
//   return hasPathSum(currentData.left, sum - currentData.val) || hasPathSum(currentData.right, sum - currentData.val);
// }


// 这个方法是属于
// 从上往下计算的 进行一个累加 将其node 值存储在队列当中 每次进行遍历 
// 也是先序遍历的一种使用
// 时间复杂度O(N) 空间复杂度O(N)
const hasPathSum = (root, targetSum)=>{
  if(root == null){
    return false
  }
  let queueNode = [];
  let queueValue=[];
  queueNode.push(root);
  queueValue.push(root.val);
  while (queueNode.length!==0){
    let currentNode = queueNode.shift();
    let temp = queueValue.shift();

    if (currentNode.left == null && currentNode.right === null){
      if (temp == targetSum ){
        return true;
      }
    }

    if(currentNode.left !== null){
      queueNode.push(currentNode.left);
      queueValue.push(currentNode.left.val + temp);
    }

    if (currentNode.right != null) {
      queueNode.push(currentNode.right);
      queueValue.push(currentNode.right.val + temp);
    }
  }
  return false
}

const bst = new BST([5,4,8,11,13,6,2,1,]);
console.log(123, bst.root)
console.log(hasPathSum(bst.root,12))


/**
 437 路径总和III
 给定一个二叉树。它的每个节点都存放这一个整数值
 找出路径和等于给定数值的路径总数
 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的 只能从父节点到子节点
 二叉树不超过1000个节点，且节点数值范围是[-10000000,1000000]的非负整数矩阵来表示一片大陆上各个单元的高度，太平洋处于大陆的左边界和上边界，而大西洋处于大陆的右边界和下边界

 示例
 root=[10,5,-3,3,2,null,11,3,-2,null,1] sum = 8;
 输出 3
 */


 /**
  思考： 需要一个根节点
  */
 const pathSum =(root,sum)=>{
   let result = 0;
   

 }