/**
 编写一个高效的算法来搜索m*n 矩阵 matrix 中的一个目标值target。该矩阵具有以下特征

 每行元素从左往右升序排列
 每列元素从上到下升序排列

 示例1 
  输入 matrix=[[1,4,5,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
  target = 5 输出true
  target = 20  输出false
 */


 /**
  * @param {number[][]} matrix 
  * @param {number} target 
  * @return {boolean}
  */




// 暴力法 双循环
const searchMatrix1 = (matrix,target)=>{
   for(let nums =0;nums<matrix.length;nums++){
     for (let i = 0; i < matrix[nums].length;i++){
       if (matrix[nums][i]===target){
         return true
       }
     }
   }
   return false
 }

 // js 方法
const searchMatrix2 = (matrix, target) => {
  const temp = matrix.flat();
  console.log(temp)
  return temp.includes(target)
}



// 方法3 分块 从上到下 从左到右都是递增数据, 分块查找




const searchMatrix3 = (matrix, target) => {
 
  if (matrix.length === 0 ) return false
  let row = matrix[0].length;
  let column = matrix.length;


  const searchRec = (left, up, right, down) => {
    // 结束条件
    if (left > right || up > down) {
      return false
    } else if (target < matrix[up][left] || target > matrix[down][right]) {
      return false
    }
     // 分块法 其实也就是二分法
    let mid = (right + left) / 2 >>> 0;
    let row = up;
    while (row <= down && matrix[row][mid] <= target) {
      if (matrix[row][mid] === target) {
        return true;
      }
      row++
    }
    return searchRec(left, row, mid - 1, down) || searchRec(mid + 1, up, right, row - 1)
  }

  return searchRec(0, 0, row - 1, column-1)
   
}


// 时间复杂度为 O(m+n) 空间复杂度O(1)
const searchMatrix = (matrix,target)=>{
  if (matrix.length === 0) return false
  let row = matrix.length-1;
  let col =0;
  while (row >= 0 && col <= matrix[0].length){
    if (matrix[row][col] === target) return true
    if (matrix[row][col] < target){
      col++;
    }else{
      row--;
    }
  }
  return false
}



const matrix = [[1, 4, 5, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]],target= 8;
// const matrix=[[5]],target = 5;
console.log(searchMatrix(matrix,target))





/**
  递归循环需要考虑的是：
    特点： 函数可以通过调用自身来进行循环
          完全取代循环
    需要考虑的是
      1 递归主体
      2 需要结束的条件


    
 */