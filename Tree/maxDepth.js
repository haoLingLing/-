/**
 104 二叉树的最大深度
 给定一个二叉树，找到最大深度
 二叉树的深度为跟节点到最远叶子节点的最长路径上的节点数
 说明：叶子节点是指没有子节点的节点

 示例
 给定二叉树 [3,9,20,null,null,15,7]

 */


const TreeNode=(val,left,right)=>{
  this.val = val ?? 0 ;
  this.left = left === undefined ? null:left;
  this.right = right ===  undefined ? null:right;
}

// 递归DFS 
// 时间复杂度O(N) 空间复杂O(height)
const maxDepth=(root)=>{
   if(root==null){
     return 0 
   }
  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);
  return Math.max(leftHeight,rightHeight)+1;
}



const nums =[3,20,5,21,35];
const bst = new BST(nums);
console.log(bst.root)
console.log(maxDepth(bst.root))


// 递归遍历查找层数 在叶子节点 从下往上找 找到叶子节点为1
// 从根节点 开始分为一个节点 左子树 一直往下找 
// 上述说白了就是后序遍历的查找
// 查找深度就是可以优先考虑这些