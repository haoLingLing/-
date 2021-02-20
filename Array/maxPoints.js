/**
  直线上最多的点数
  给定一个二维平面，平面上有n个点，求最多有多少个点在同一条直线上

  示例1 
  输入 [[1,1],[2,2],[3,3]]
  输出 3

  示例2 
  输入[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
  输出 4 
 */


const gcdFun =(a,b)=>{
   while(b!==0){
     let temp = a%b;
     a= b;
     b = temp;
   }
   return a;
}


// 使用的原理 
// 时间复杂度O(n^2)  空间复杂度O(1)
const maxPoints =(points)=>{
    // 2点为一条直线，如果只有两个点，说明必是一条直线
    if(points.length<3){
      return points.length
    }

    let res = 0;
    // 遍历两个点
    for(let i =0;i<points.length;i++){
      // 重复的点
      let duplicate =0;
      let max = 0;
      // 每次存储一个点中最大的数据 然后记录这个数据中最大的点在一条直线上
      let hashMap = {};
      for(j=0;j<points.length;j++){
        // 求出分子和分母  
        let x = points[j][0] - points[i][0];
        let y = points[j][1] - points[i][1];
        if(x==0 && y==0){
          duplicate++;
          continue;
        }
        // 进行约分 求最大公约数
        let gcd = gcdFun(x,y);
        x= x/gcd;
        y = y/gcd;
        let key =`${x}@${y}`;
        hashMap[key] = (hashMap[key] || 0)+1;
        // max = Math.max(max, hashMap[key]);
      }
      // 考虑当前的点，是重复的点
      max = Math.max(max, ...Object.values(hashMap));
      res = Math.max(res,max+duplicate)
      console.log('hashMap', hashMap)
    }
 
    return res
}

const points = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]];
console.log(maxPoints(points))



// 总结
// 需要在一堆数据中找到最大的值，可以使用hash 存储当前的数据 ,然后使用一个变量 max 存储数据
// 这道题可以归为找到最大的XX 然后需要存储数据，对比，不一样的地方就是，不同的题目，需要找到如果才能配对的问题
// 转换问题
// 这道题需要考虑的问题是  在计算机除法小数有可能计算不成功，所以需要将除法转换成乘法