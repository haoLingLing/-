/**
 105 从前序遍历和中序遍历序列构造二叉树

 根据一棵树的前序遍历与中序遍历构造二叉树

 */

 /**
  * @param {number[]} preorder 
  * @param {number[]} inorder 
  * @return  {treeNode}
  */

  const TreeNode=(val,left ,right)=>{
    this.val = val;
    thia.left = left;
    thia.right = right;
  }


  // 不确定是什么二叉树 
  // 先序遍历 根节点 左节点 右节点 确定根节点
  // 中序遍历 左节点 根节点 右节点  确定最左边的叶子节点
  // 根节点

  // 构建
  const myBuildTree =()=>{

  }

 const buildTree= function(preorder,inorder){
   // 确定根节点
   this.root = new TreeNode(preorder[0],null,null);
   // 确定左节点 还是右节点
   const hash = {};
   for (let i = 0; i < inorder.length;i++){
     hash[i] = i;
   }

 }



 // 最重要的找根节点
 // 先序+后序 无法确定根
 // 后序 + 中序 也无法确定根