/**
 110 平衡二叉树
 给定一个二叉树 判断它是否是高度平衡的二叉树
 高度平衡二叉树定义为：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1 
 
 示例1 
 const root =[3,9,20,null,null,15,7] 
 输出 true

 示例2  
 输入 root=[1,2,2,3,3,null,null,4,4]
 输出  false

 示例3
 输入 root=[];
 输出 true
 */


// 时间复杂度 如果是true 需要遍历所有的节点 O(N) 
// 空间复杂度 如果栈变为链表时 需要O(N) 

/*

const isBalanced=(root)=>{
  return recur(root) !== -1;
}

const recur = (root)=>{
  if(root===null) return 0;
  let leftHeight = recur(root.left);
  if (leftHeight===-1) return -1;
  let rightHeight = recur(root.right);
  if(rightHeight === -1)  return -1;
  return Math.abs(leftHeight - rightHeight) < 2 ? Math.max(leftHeight, rightHeight)+1 : -1;
}

*/


const isBalanced = (root) => {
  return recur(root) !== -1;
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root,right)
}

const depth =(root )=>{
 if(root ===null) return 0;
  return Math.max(depth(root.left), depth(root.right))+1;
}

const bst = new BST([3,20,15,21,35]);
const root = bst.root;
console.log(isBalanced(root));

// 总结还是需要查找的是递归 当成一棵树 左右节点  
// 后序遍历 查找统一深度的节点的高度


