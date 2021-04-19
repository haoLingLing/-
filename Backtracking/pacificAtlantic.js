/**
 417 太平洋大西洋水流问题
 给定一个m*n 的非负整数矩阵来表示一片大陆上各个单元的高度，太平洋处于大陆的左边界和上边界，而大西洋处于大陆的右边界和下边界
 规定水流只能按照上、下、左、右四个方向流动，只能从高到低或者同等高度上流动
 请找出那些流水即可以流动到太平洋，又能流动到大西洋的陆地单元的坐标

 输出：
 1 输出的坐标顺序不重要
 2 m 和 n 都小于150

 const number=[
   [1,2,2,3,5],
   [3,2,3,4,4],
   [2,4,5,3,1],
   [6,7,1,4,5],
   [5,1,1,2,4]]
 ]

输出 [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 */

 /**
  思考
  当前的元素 当前行 或者当前列 最大值的时候可以流通
  但凡是
  */

 /**
  * @param {number[][]} number 
  * @return {number[][]}
  */


  
const pacificAtlantic = (matrix)=>{
  if (!matrix || !matrix[0] || !matrix[0].length) return [];
  const m = matrix.length;
  const n = matrix[0].length;
  // 往上 往右走
  const flow1 = Array.from({ length: m }, () => {
    return Array.from({ length: n }, () => false)
  })

  // 往下 往右走
  const flow2 = Array.from({length:n},()=>{
    return Array.from({length:n},()=>false)
  })

  console.log(123, flow1, flow2)

  const dfs=(r,c,flow)=>{
    flow[r][c]=true;
    [[r-1,c],[r,c+1],[r+1,c],[r,c-1]].forEach(([nr,nc])=>{
      if(nr>=0 && nr<m && nc>=0 && nc<n && !flow[nr][nc] && matrix[nr][nc]>=matrix[r][c]){
        dfs(nr,nc,flow)
      }
    })
  }

  //多管齐下, 第一行遍历到最后行，第一列遍历到最后列
  for (let i = 0; i < m; i++) {
    dfs(i, 0, flow1)
    dfs(i, n - 1, flow2)
  }
  
  for (let i = 0; i < n; i++) {
    dfs(0, i, flow1)
    dfs(m - 1, i, flow2)
  }
 
  // 找出两条路都能走通的节点
  const res =[];
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if (flow1[i][j] && flow2[i][j]){
        res.push([i,j])
      }
    }
  }

  return res;

}

const number = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]

console.log(pacificAtlantic(number))






// 回溯算法
/*
  实际上一个类似枚举的索搜尝试过程，主要是在搜索过程中尝试过程中寻找问题的解，当发现已不满足求解条件时，就回溯返回，尝试别的路径，回溯发是一种选优索搜法，按选优条件向前搜索，以达到目标，但当探索到某一步时，发现原先选择并不忧或达不到目标，就退回异步重新选择，这种走不通就退回再走的技术称为回溯法，而满足这个回溯条件的某个状态的点称为回溯点，许多复杂的，都可以使用回溯法

  基本思想 从一条路往前走，能进则进，不能进则退回来，换一条路再试
*/